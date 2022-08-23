import './App.css';
import Weather from './Wheather'
import WeatherWrapper from './Wheather/context/provider'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherWrapper city={'London,UK'}>
          <Weather/>
        </WeatherWrapper>
        <WeatherWrapper city={'Palma'}>
          <Weather/>
        </WeatherWrapper>
      </header>
    </div>
  );
}

export default App;
