import React from 'react'
import './index.css'

export default function SectionThree() {
    return (
        <>
            <div className='flex-contents left section-three-heading'>
                <h2>Watch everywhere.</h2>
                <p className='section-sub-heading'>Steam unlimited movies an TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div className='flex-contents right'>
                <div className='screens-pile-wrapper'>
                    <img className='screens' src='./assets/img/device-pile.png' />
                    <video autoPlay playsInline muted loop>
                        <source src='./assets/img/video-devices.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}
