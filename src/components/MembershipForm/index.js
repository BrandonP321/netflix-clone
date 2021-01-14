import React from 'react'
import './index.css'

export default function MembershipForm() {
    return (
        <>
            <p className='small-text-membership-form'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='membership-form'>
                <input className='email-input' placeholder='Email address' />
                <button>GET STARTED</button>
            </form>
        </>
    )
}
