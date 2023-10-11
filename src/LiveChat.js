import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from './utils/chatSlice';
import { generateRandomName, generateRandomText } from './utils/helper';
export default function LiveChat() {
  const dispatch=useDispatch();
   const chatMessages=useSelector((store)=> store.chat.messages);
   const [liveMessage,setLiveMessage]=useState(); 
  
    useEffect(()=>{
        const i=setInterval(() => {
           console.log("api polloing")
           dispatch(addMessage({
            name:generateRandomName(),
            message:generateRandomText(30)
           }))
        }, 500);
        return()=>(clearInterval(i))
    },[])

    const submitComment=((liveMessage)=>{
      dispatch(addMessage({
        name:"Ashish Dhyani",
        message:liveMessage
       }))
    })
  return (

    <>
  
    <div className='w-full h-[523px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-scroll flex flex-col-reverse'>
      {/* <ChatMessage name="Ashish Dhyani" message="This is my react application's "></ChatMessage> */}
      {chatMessages.map((c,index)=>(<ChatMessage key={index} name={c.name} message={c.message}></ChatMessage>))}
     
    </div>
    <form className='w-full p-2 ml-2 border border-black rounded-lg border-t-0' onSubmit={(e)=>{ e.preventDefault(); submitComment(liveMessage); setLiveMessage("")}}>
      <input className="w-[80%]" type="text" placeholder='Type your comment' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
      <button className='px-2 mx-2 bg-blue-50 border '>Send</button>
    </form>
    </>
  )
}
