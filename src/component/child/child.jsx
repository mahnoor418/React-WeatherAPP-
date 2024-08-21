//chlid.jsx
import React, { useContext } from 'react'
import { Themecontext } from '../../context/Context'

const Child = () => {
  const {setCount,count}=useContext(Themecontext)
 const addvalue =()=>{
    setCount(count + 1)
 }
  return (
    <div>
      <button onClick={addvalue}>add value</button>
    </div>
  )
}

export default Child
