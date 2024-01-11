import React from 'react' 
import './WeatherApp.css'

import clear_icon from '../Assets/clear.png'; /* eslint-disable-line */
import cloud_icon from '../Assets/cloud.png'; /* eslint-disable-line */
import drizzle_icon from '../Assets/drizzle.png'; /* eslint-disable-line */
import humidity_icon from '../Assets/humidity.png'; /* eslint-disable-line */
import rain_icon from '../Assets/rain.png'; /* eslint-disable-line */
import search_icon from '../Assets/search.png'; /* eslint-disable-line */
import snow_icon from '../Assets/snow.png'; /* eslint-disable-line */
import wind_icon from '../Assets/wind.png'; /* eslint-disable-line */

const WeatherApp = () => {

  let api_key ="7e96429ee20dcf80042a54c417051b8e"; /* eslint-disable-line */
   
  const search = async () => { /* eslint-disable-line */
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`; /* eslint-disable-line */
    
    let response = await fetch(url); /* eslint-disable-line */
    let data = await response.json(); /* eslint-disable-line */
   
    const humidity = document.getElementsByClassName("humidity-percent"); /* eslint-disable-line */
    const wind = document.getElementsByClassName("wind-rate");/* eslint-disable-line */
    const temprature = document.getElementsByClassName("weather-temp");/* eslint-disable-line */
    const location = document.getElementsByClassName("weather-location");/* eslint-disable-line */


    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temprature[0].innerHTML = data.main.temp+" °c";
    location[0].innerHTML = data.name;
 
  }



  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search' />
        <div className='search-icon' onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
       </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">80 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default WeatherApp
