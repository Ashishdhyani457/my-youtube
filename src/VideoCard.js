import React from 'react'

export default function VideoCard({data}) {
  // console.log(data)
  const {snippet,statistics}=data;
  console.log(statistics)
  const{channelTitle,title,thumbnails}=snippet;

  return (
    <div className='m-2 p-2 w-72 shadow cursor-pointer'>
     <img  className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
     <ul>
      <li className='font-bold'>{title}</li>
      <li>{channelTitle}</li>
      <li>Views Count :{statistics.viewCount}</li>
    
     </ul>
    </div>
  )
}
