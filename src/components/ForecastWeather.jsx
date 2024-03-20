import React from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { useState, useEffect } from 'react';

const ForecastWeather = () => {

  const API_KEY = "DaE8bFEKDdGcZCuB098PHmNZbuCrD1Gw";
  const [searchItem, setSearchItem] = useContext(WeatherContext);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchForecastWeather = async () => {
      try {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const data = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${searchItem}&apikey=DaE8bFEKDdGcZCuB098PHmNZbuCrD1Gw`, options);
        // const response = await data.json().then((response) => setApiData(response));
        const response = await data.json().then((response) => setApiData(response.timelines.daily));
        console.log("response", response);
        console.log("api", apiData)
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchForecastWeather();
  },[searchItem])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }

  return (
    <div className='weather-forecast-div'>
      <h2>Weather Forecast</h2>
      <div className='daily-forecast-div'>
        {apiData?.map((item) => (
          <div className='date-div'>
          <div>{formatDate(item.time)}</div>
          <div>{item.values.temperatureAvg} °C</div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastWeather