import './App.css';
import Weather from './Wheather'
import WeatherWrapper from './Wheather/context/provider'
import Grid from './Layout/Grid'
import { getCityFromParams } from './Wheather/utils'

function App() {
  const city = getCityFromParams()
  return (
    <div className="App">
      <header className="App-header">
        <Grid columns={2} rows={3} width={'80%'} style={{justifyItems: 'center'}}>
          <WeatherWrapper city={city}>
            <Weather/>
          </WeatherWrapper>
          <WeatherWrapper city={'Palermo'}>
            <Weather/>
          </WeatherWrapper>
        </Grid>
      </header>
    </div>
  );
}

export default App;
