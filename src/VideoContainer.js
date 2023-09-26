import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOO_API } from './utils/constants';
import VideoCard from "./VideoCard"
import { Link } from 'react-router-dom';


export default function VideoContainer() {
const[videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  const  getVideos=async ()=>{
    const data =await fetch(YOUTUBE_VIDEOO_API)
    const json=await data.json();
    // console.log(json.items)
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap justify-between mr-10 '>
      {videos.map((video)=>( 
      <Link  key={video?.id}
      to={"/watch/"+video?.id}
      > 
       <VideoCard key={video.id} data={video}></VideoCard>
      </Link>
      ))}
    
    </div>
  )
}
