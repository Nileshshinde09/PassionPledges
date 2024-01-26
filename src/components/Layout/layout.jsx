import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import { useState } from 'react'
const layout = () => {
  const [toggleHeader, setToggleHeader] = useState(false)
  return (
    <div>
      {
        toggleHeader?
        <Header/> 
        :
        <></>
      }
      <Outlet/>
    </div>
  )
}

export default layout
