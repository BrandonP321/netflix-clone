import React from 'react'
import './index.css'

export default function index() {
    return (
        <div className='hero-wrapper'>
            <div className='hero-img-wrapper'>
                <img src='./assets/img/hero.jpg' />
                <div className='overlay'></div>
            </div>
            <div className='hero-text-box'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <p className='sub-title'>Watch anywhere. Cancel anytime.</p>
                <p className='small-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                <form>
                    <input className='email-input' placeholder='Email address' />
                    <button>GET STARTED</button>
                </form>
            </div>
        </div>
    )
}
