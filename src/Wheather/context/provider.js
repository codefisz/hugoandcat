import React from 'react'
import PropTypes from 'prop-types';
import {WeatherContext} from './WeatherContext'
import {initialState, weatherReducer} from './weatherReducer'

export default function WeatherWrapper( {city , children } ) {
  const [ state, dispatch ] = React.useReducer( weatherReducer, initialState(city) );

  return <WeatherContext.Provider value={ [ state, dispatch ] } >
      { children }
    </WeatherContext.Provider>;
}

WeatherWrapper.propTypes = {
  children: PropTypes.node,
};
