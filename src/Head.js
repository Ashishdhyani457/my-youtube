import React from 'react'
import {useDispatch} from "react-redux"
import { toggleMenu } from './utils/appSlice'
export default function Head() {
const dispatch=useDispatch()
const toggleMenuHandler=()=>{
dispatch(toggleMenu())
}

  return (
    <div className='grid grid-flow-col p-5 m-2 '>
<div className='flex col-span-1' >
    <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="menu" />
   <a href="/"> <img className='h-8 ml-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU" alt="youtube logo" /> </a>
</div> 
<div className='col-span-10 ml-40'>
    <input className='w-1/2 border border-gray-400 p-1 rounded-l-full' type="text" />
    <button className='border border-gray-400 p-1 px-4 bg-gray-100 rounded-r-full'>🔍</button>
</div>
<div className='col-span-1'>
    <img className='h-8'src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="" />
</div>
    </div>
  )
}
