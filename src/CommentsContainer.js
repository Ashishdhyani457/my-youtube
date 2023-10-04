import React from 'react'

const commentsData=[
{ name:"Ashish",
    text:"wdadwad",
replies:[
    { name:"Deepak",
    text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[
    { name:"Mayank",
    text:"woohhhhhhh enjoying coding this project",
replies:[{ name:"Ashish",
text:"wdadwad",
replies:[
{ name:"Deepak",
text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[
{ name:"Mayank",
text:"woohhhhhhh enjoying coding this project",
replies:[{ name:"Mayank",
text:"woohhhhhhh enjoying coding this project",
replies:[]
},
]
},
{ name:"Ashish",
text:"kyaa bhai",
replies:[]
},
{ name:"Deepak",
text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[]
},
]
},
{ name:"Pawan",
text:"aaajjj tohhh majaa aa gyaya",
replies:[]
},
{ name:"Sonu",
text:"nice codinggg",
replies:[
{ name:"Mayank",
text:"woohhhhhhh enjoying coding this project",
replies:[]
},
{ name:"Ashish",
text:"kyaa bhai",
replies:[]
},
{ name:"Deepak",
text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[]
},
]
},
]
},]
},
{ name:"Ashish",
    text:"kyaa bhai",
replies:[]
},
{ name:"Deepak",
    text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[]
},
]
},
{ name:"Pawan",
    text:"aaajjj tohhh majaa aa gyaya",
replies:[]
},
{ name:"Sonu",
    text:"nice codinggg",
replies:[
    { name:"Mayank",
    text:"woohhhhhhh enjoying coding this project",
replies:[]
},
{ name:"Ashish",
    text:"kyaa bhai",
replies:[]
},
{ name:"Deepak",
    text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[]
},
]
},
]
},
{ name:"Mayank",
    text:"woohhhhhhh enjoying coding this project",
replies:[]
},
{ name:"Ashish",
    text:"kyaa bhai",
replies:[]
},
{ name:"Deepak",
    text:"mwidioadoi dainoid awnuodin dnidoawnd dioahodi",
replies:[]
},
{ name:"Manish",
    text:"bollooooo",
replies:[]
},
{ name:"Pawan",
    text:"aaajjj tohhh majaa aa gyaya",
replies:[]
},
{ name:"Sonu",
    text:"nice codinggg",
replies:[]
},


]
const Comment=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
<img className='w-12 h-12' src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="" />
<div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p className=''>{text}</p>
</div>
        </div>
    )
}
const CommnetList=({comments})=>{
return comments.map((comment, index)=>(
<div key={index}>
<Comment data={comment}></Comment>
<div className=' ml-3 pl-5 border border-l-black'>
<CommnetList comments={comment.replies}></CommnetList>
</div>
</div>

))
}
export default function CommentsContainer(){
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
      <CommnetList comments={commentsData}></CommnetList>
    </div>
  )
}
