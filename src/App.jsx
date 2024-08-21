//APP.jsx
import { useState } from 'react'
import Weather from './Weather'
import viteLogo from '/vite.svg'
import './App.css'
import InputWeather from './component/InputWeather'
import { Themecontext } from './context/Context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Themecontext.Provider value={{count , setCount}} >
      <div>
       <Weather />
      {/* <InputWeather/> */}
        
    </div>
    </Themecontext.Provider>
   
  )
}

export default App
