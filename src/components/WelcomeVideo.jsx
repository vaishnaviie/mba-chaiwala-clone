import React from 'react';
import video from "../assests/MBA Chai Wala.mp4";
import "../styles/WelcomeVideo.scss";

const WelcomeVideo = () => {
  return (
    <div className='welcome'>
      <video src= {video} muted autoPlay loop controlsList='nodownload' ></video>
      <div></div>
    </div>
  )
}

export default WelcomeVideo