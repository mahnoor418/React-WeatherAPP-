import React, { useEffect, useState } from 'react'
import DisplayWeather from './DisplayWeather';


const MainWeatherFile = ( {city, searchweather}) => {

    const [weather, setWeather] = useState(null);
    const apiKey = "0c62604b59d8ee7f0a9e01814c60a409"; 

    console.log(city,'city');
    const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          if (!response.ok) {
            throw new Error("City not found");
          }
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          setWeather(null);
        }
      };
  
   
        useEffect(()=>{
            fetchWeather()

        },[searchweather] ) 
 
    
        console.log(weather,'arrow==')
        console.log( searchweather,'bolean')
  return (
    <div>
      
      < DisplayWeather/>
    </div>
  )
}





export default MainWeatherFile
