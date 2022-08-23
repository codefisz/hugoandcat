import React from 'react';
import PropTypes from 'prop-types';
import {WeatherContext} from './WeatherContext'

export const initialState =(city)=> ({
  city: city ?? 'London,UK',
  isLoading: false,
  list: [],
  getNext:3 * (24/3) + 1 //get next 3 days from 3hr data plus current
});

export const weatherReducer = ( state = {}, action )=>{
  switch ( action.type ) {
    case 'find':
      return { ...state, ...action.payload, isLoading: true };
    case 'success':
      return { ...state, ...action.payload, isLoading: false };
    case 'fail':
      return { ...state, isLoading: false };
    case 'change':
      return { ...state, ...action.payload};
    default:
      return state;
  }
};

export default function WeatherWrapper( {city , children } ) {
  const [ state, dispatch ] = React.useReducer( weatherReducer, initialState(city) );

  const find = ()=>{
    if (!state.isLoading){
      dispatch({type: 'find'})
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state.city}&appid=0037a205884c254c3fe1eb531093170a&units=metric&cnt=${state.getNext}`)
      .then(resp=> {
        if(resp.ok){
          return resp.json()
        }
        throw new Error('Something went wrong');
      }).then(data=> {
        if(data?.list?.length){
          success(data.list)
        }
      }).catch((error)=>fail(error))
    }
  }

  const success = (list)=>{
    const data = []
    for(let i= 0; i<list.length; i=i+8){
      data.push(list[i])
    }
    dispatch({type: 'success', payload: {list: data} })
  }
  const fail = ()=>{
    dispatch({type: 'fail'})
  }
  const change = (e)=>{
    dispatch({type: 'change', payload: {city:e.target.value} })
  }
  return <WeatherContext.Provider value={ [ state, { find, success, change, fail } ] } >
      { children }
    </WeatherContext.Provider>;
}

export function useWeather() {
  const context = React.useContext( WeatherContext );
  if ( ! context ) {
    throw new Error( 'useWeather must be used within WeatherWrapper' );
  }
  return context;
}

WeatherWrapper.propTypes = {
  children: PropTypes.node,
};
