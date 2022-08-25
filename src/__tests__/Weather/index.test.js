import { render, screen } from '@testing-library/react';
import Weather from '../../Wheather'
import WeatherWrapper from '../../Wheather/context/provider'

describe('Weather', function () {
  it('should be used in the WeatherWrapper', function () {
    expect(()=>render(<Weather/>)).toThrowError('useWeather')
  })

  it('should show find button and input field even when offline', function () {
    const city = 'London,UK'
    render(<WeatherWrapper>
      <Weather/>
    </WeatherWrapper>)

    expect(screen.getByText("Find")).toBeInTheDocument()
    expect(screen.getByDisplayValue(city)).toBeInTheDocument()
  })

})