import React from 'react';
import '../App.css';
import './IntroVideo.css';
import video from '../videos/video-1.mp4';

function IntroVideo() {
    return (
        <div className="intro-container">
            <video src={video} autoPlay loop muted />
            <h1>"靡不有初，鲜克有终。"</h1>
            <p>"All are good at the first,but few proved themselves to be so at the last."</p>
        </div>
    )
}

export default IntroVideo
