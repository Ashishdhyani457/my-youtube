import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

export default function Body() {
  return (
    <div className='flex'>
    <Sidebar></Sidebar> 
    <MainContainer/>
    </div>
    
  )
}
