import { getDay, ordinals, toFahrenheit } from '../../Wheather/utils'

describe("toFahrenheit() return temp in Fahrenheit from Celsius", () => {

  it('accepts only type numbers', ()=>{
    expect(toFahrenheit([])).toBeUndefined()
    expect(toFahrenheit('56')).toBeUndefined()
    expect(toFahrenheit()).toBeUndefined()
  })

  it('returns Fahrenheit temperature for any number provided rounded to full integer', ()=>{
    expect(toFahrenheit(0)).toBe(32)
    expect(toFahrenheit(90.5)).toBe(195)
  })
})

describe('ordinals() return ordinal of integer', ()=>{
  it('only accept numeric values', ()=>{
    expect(ordinals('45')).toBeUndefined()
    expect(ordinals({ })).toBeUndefined()
  })

  it('returns ordinal [string] of any [number] (works only with integers now)', ()=>{
    expect(ordinals(75)).toBe('75th')
    expect(ordinals(75.1)).toBe('75.1th')
    expect(ordinals(101)).toBe('101st')
    expect(ordinals(10103)).toBe('10103rd')
    expect(ordinals(20000132)).toBe('20000132nd')
    expect(ordinals(11)).toBe('11th')
  })
})

describe('getDay() return [string] (day of the week) (ordinal)', ()=>{
  it('accepts string day', ()=>{
    expect(()=> getDay('22-12-1975')).toThrowError('Incorrect Date Format')
  })

  it('return date string correct format', function () {
    expect(getDay('1975-02-11')).toBe('Tuesday 11th')
  })
})