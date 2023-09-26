import React from 'react'
import Button from './Button'

export default function ButtonList() {

  const list=["All","Football","Love","News","Cricket","Songs","Science"]
  return (
    <div className='flex'>
      {list.map((item)=>( <Button  key={item} name={item}></Button>))}
     
     
    </div>
  )
}
