import React, { useEffect } from 'react'
import { WeatherContext } from './WeatherContext'

export default function useWeather() {

  const context = React.useContext( WeatherContext );
  if ( ! context ) {
    throw new Error( 'useWeather must be used within WeatherWrapper' );
  }

  const [state, dispatch ] = context;

  useEffect(()=>{
    if(!state.isLoading){
      find()
    }
    //return ()=>fail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    for(let i= 0; i<list.length-1; i=i+8){
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

  return [state, {find, fail, success, change}];
}