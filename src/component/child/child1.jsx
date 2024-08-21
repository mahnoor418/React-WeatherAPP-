//Child1.jsx
import React, { useContext } from 'react'
import { Themecontext } from '../../context/Context'

const Child1 = () => {
    const {count}=useContext(Themecontext)
  return (
    <div>
       {count}
    </div>
  )
}

export default Child1
