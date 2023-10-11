import React from 'react'

export default function ChatMessage({name , message}) {


  return (
    <>
    <div className='flex p-2'>
      <img
          className="h-8"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
          alt=""
        />
        <span className=' mt-1 font-bold text-sm px-2'>{name}</span>
        <span className=' mt-1 ml-1 text-sm'>{message}</span>
        </div>
      
        </>
  )
}
