import React from 'react'
import './index.css'

export default function SectionTwo() {
    return (
        <>
            <div className='flex-contents left'>
                <div className='phone-wrapper'>
                    <img className='phone' src='./assets/img/mobile-stranger-things.jpg' />
                    <div className='downloading-wrapper'>
                        <img className='poster' src='./assets/img/poster-stranger-things.png' />
                        <div className='text-wrapper'>
                            <p className='title'>Stranger Things</p>
                            <p className='small-text'>Downloading...</p>
                        </div>
                        <div className='icon'></div>
                    </div>
                </div>
            </div>
            <div className='flex-contents right section-two-heading'>
                <h2>Download your shows to watch offline.</h2>
                <p className='section-sub-heading'>Save your favorites easily and always have something to watch.</p>
            </div>
        </>
    )
}
