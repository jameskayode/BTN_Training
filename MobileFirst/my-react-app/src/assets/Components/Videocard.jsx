// import React from 'react';
import ReactPlayer from "react-player";

import vidpics from "/src/assets/images/videobg.png"
import { FaPlay } from "react-icons/fa";
const Videocard = () => {
  return (
    <div className="video-section">
      <ReactPlayer
        url="http://www.w3schools.com/html/mov_bbb.mp4"
        width="100%"
        playing
       
        playIcon={
          <button className="play-btn">
            <FaPlay/>
          </button>
        }
        light={vidpics}
      />
    </div>
  );
}

export default Videocard;
