import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RealTimeWeather from './components/RealTimeWeather';
import ForecastWeather from './components/ForecastWeather';
import { WeatherContext } from './context/WeatherContext';

function App() {

  const [searchItem, setSearchItem] = useState("Bangalore");

  return (
    <WeatherContext.Provider value={[searchItem, setSearchItem]}>
      <div className="App">
        <div className='real-time-div'>
          <SearchBar/>
          <RealTimeWeather/>
        </div>
        <div className='forecast-div'>
          <ForecastWeather/>
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
