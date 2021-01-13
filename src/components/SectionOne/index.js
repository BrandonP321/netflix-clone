import React from 'react'
import './index.css'

export default function SectionOne() {
    return (
        <>
            <div className='flex-contents left'>
                <h2>Enjoy on your TV.</h2>
                <p>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className='flex-contents right'>
                <div className='tv-wrapper'>
                    <img className='tv' src='./assets/img/tv.png' />
                    <video autoPlay playsInline muted loop>
                        <source src='./assets/img/tv-video.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}
