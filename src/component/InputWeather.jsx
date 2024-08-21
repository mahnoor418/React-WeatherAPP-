import React, { useState } from 'react'
import MainWeatherFile from './mainweatherfile'
//@ts-ignore

const InputWeather = () => {
  
   const [city, setCity ]= useState('')
   const [submitsearch, setsubmitsearch ]= useState(false)
    const handleSearch =(e)=>{
        e.preventDefault()
        setsubmitsearch(true)
    }
  return (
    <div>  
      
   
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MainWeatherFile city={city} searchweather={submitsearch}/>
    </div>
  )
}

export default InputWeather
