import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useParams } from "react-router-dom";

export default function WatchPage() {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div>
      <iframe
      className="m-7 rounded-lg" 
        width="980"
        height="520"
        src={"https://www.youtube.com/embed/"+params.id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
