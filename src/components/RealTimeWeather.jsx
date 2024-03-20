import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const RealTimeWeather = () => {

  const API_KEY = "DaE8bFEKDdGcZCuB098PHmNZbuCrD1Gw";
  const [searchItem, setSearchItem] = useContext(WeatherContext);
  const [time, setTime] = useState();
  const [apiData, setApiData] = useState(
    {
      "data": {
        "time": "2024-03-20T17:17:00Z",
        "values": {
          "cloudBase": null,
          "cloudCeiling": null,
          "cloudCover": 59,
          "dewPoint": -9.94,
          "freezingRainIntensity": 0,
          "humidity": 83,
          "precipitationProbability": 0,
          "pressureSurfaceLevel": 992.44,
          "rainIntensity": 0,
          "sleetIntensity": 0,
          "snowIntensity": 0,
          "temperature": 1.5,
          "temperatureApparent": -4.73,
          "uvHealthConcern": 1,
          "uvIndex": 3,
          "visibility": 16,
          "weatherCode": 1101,
          "windDirection": 284.75,
          "windGust": 10.73,
          "windSpeed": 8.94
        }}}
  );

  const currentDate = new Date();

  useEffect(() => {
    const fetchRealTimeWeather = async () => {

      try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const data = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${searchItem}&apikey=${API_KEY}`, options);
        const response = await data.json();
        setApiData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRealTimeWeather();
  },[searchItem]);

  const capitalizeFirstLetter = (searchItem) => {
    return searchItem.charAt(0).toUpperCase() + searchItem.slice(1);
  }

  return (
    <>
    <div className='real-time-weather'>
        <div className='city-time-div'>
          <p>{capitalizeFirstLetter(searchItem)}</p>
          <p>{currentDate.toDateString()}</p>
        </div>
        <div className='temperature-div'>
          <p>{apiData.data.values.temperature}°C</p>
        </div>
    </div>
    <div className='real-time-values'>
      <div>
        <h5>Humidity</h5>
        <p>Today's Humidity: {apiData.data.values.humidity}</p>
      </div>
      <div>
        <h5>Wind Speed</h5>
        <p>Today's Wind Speed: {apiData.data.values.windSpeed}kmph</p>
      </div>
      <div>
        <h5>UV Index</h5>
        <p>Today's UV Index: {apiData.data.values.uvIndex}</p>
      </div>
      <div>
        <h5>Dew Point</h5>
        <p>Today's Pressure: {apiData.data.values.dewPoint}</p>
      </div>
    </div>
    </>
  )
}

export default RealTimeWeather