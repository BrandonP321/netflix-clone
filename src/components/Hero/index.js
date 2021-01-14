import React from 'react'
import MembershipForm from '../MembershipForm'
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
                <MembershipForm />
            </div>
        </div>
    )
}
