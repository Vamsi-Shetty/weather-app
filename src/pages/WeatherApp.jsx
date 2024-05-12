import React from 'react'
import SearchBar from '../components/SearchBar'
import RealTimeWeather from '../components/RealTimeWeather'

const WeatherApp = () => {
  return (
    <div>
        <div className='real-time-weather-div'>
            <SearchBar/>
            <RealTimeWeather/>
        </div>
        <div className='forecast-weather-div'></div>
    </div>
  )
}

export default WeatherApp