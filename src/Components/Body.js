import React from 'react'
import SideBar from './SideBar'
//import MainConatiner from './MainConatiner'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
