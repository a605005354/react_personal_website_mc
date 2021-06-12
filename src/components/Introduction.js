import React from 'react';
import '../App.css';
import './Introduction.css';
import introvideo from '../videos/video-1.mp4';

function Introduction() {
    return (
        <div className='intro-box-container'>
            {/*<video src={introvideo} controls autoPlay loop muted />*/}
            
            <div className="intro-box">
                <p>Welcome, I'm Mingyong Cai, a Software Engineer graduated @Purdue. A
                    <br />
                    proud Boilermaker. I love to make stuff and create things.
                    <br/>
                    我叫蔡明勇, 一个专注于重复造轮子的软件工程师, 欢迎来到我的个人网站.
                </p>
            </div>
        </div>
    )
}

export default Introduction
