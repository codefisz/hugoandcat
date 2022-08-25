import {
  initialState,
  weatherReducer,
} from '../../../Wheather/context/weatherReducer'

describe('initialState() returns initial state object', ()=>{
  it('should return object even if props not passed', function () {
    expect(initialState()).toHaveProperty('city')
    expect(initialState()).toHaveProperty('isLoading')
    expect(initialState()).toHaveProperty('list')
    expect(initialState()).toHaveProperty('getNext')
  })
})

describe('weatherReducer() to control state with actions', ()=>{
  const state = initialState()

  it('should set state to isLoading when action is find', function () {
    const action = {type:'find'}
    expect(weatherReducer(state, action).isLoading).toBeTruthy()
  })

  it('should return state isLoading=false only when action is success || fail', function () {
    weatherReducer(state, { type: 'find' })
    let action = {type:'fail'}
    expect(weatherReducer(state, action).isLoading).toBeFalsy()

    action = {type:'success'}
    expect(weatherReducer(state, action).isLoading).toBeFalsy()

    action = {type:'find'}
    weatherReducer(state, action)
    action = {type:'change'}
    expect(weatherReducer(state, action).isLoading).toBeFalsy()
  })
})