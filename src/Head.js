import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";
export default function Head() {

  const[searchQuery,setSerachQuery]=useState("");
  const [suggestions,setSuggestion]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false)
  const searchCache=useSelector(store=>store.search);
  const dispatch=useDispatch();
useEffect(()=>{
  const getSearchSuggestions= async ()=>{
    console.log("Api call "+searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json=await data.json();
    console.log(json[1])
    setSuggestion(json[1])
    dispatch(cacheResults({[searchQuery]:json[1]}))
  }
  const timer=setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery])
    }else{
    getSearchSuggestions();
  }}, 200);
  return()=>{
    clearTimeout(timer)
    
  }
},[searchQuery])

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  

  return (
    <div className="grid grid-flow-col p-5 m-2 ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <a href="/">
          {" "}
          <img
            className="h-8 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
            alt="youtube logo"
          />{" "}
        </a>
      </div>
      <div className="col-span-10 ml-40">
        <div> 
        <input
          className="w-1/2 px-5 border border-gray-400 p-1 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSerachQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border border-gray-400 p-1 px-4 bg-gray-100 rounded-r-full">
          🔍
        </button>
        </div>
        { showSuggestion && suggestions.length>=1 && <div className="fixed bg-white shadow-lg w-[27.5rem] rounded-lg  px-5 py-2 border border-gray-200">
          <ul>
            {suggestions.map((s)=>(  <li key={s} className="shadow-sm py-2 hover:bg-gray-100"> 🔍 {s}</li>)) }
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
