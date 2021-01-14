import React from 'react'
import './index.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <p className='questions-number'>Questions? Call 1-844-505-2993</p>
                <div className='footer-flex'>
                    <div className='column'>
                        <a href='#'>FAQ</a>
                        <a href='#'>Investor Relations</a>
                        <a href='#'>Ways to Watch</a>
                        <a href='#'>Corporate Information</a>
                        <a href='#'>Netflix Originals</a>
                    </div>
                    <div className='column'>
                        <a href='#'>Help Center</a>
                        <a href='#'>Jobs</a>
                        <a href='#'>Terms of Use</a>
                        <a href='#'>Contact Us</a>
                    </div>
                    <div className='column'>
                        <a href='#'>Account</a>
                        <a href='#'>Redeem Gift Cards</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Speed Test</a>
                    </div>
                    <div className='column'>
                        <a href='#'>Media Center</a>
                        <a href='#'>Buy Gift Cards</a>
                        <a href='#'>Cookie Preferences</a>
                        <a href='#'>Legal Notices</a>
                    </div>
                </div>
                <div className='language-dropdown'>
                    <select>
                        <option selected>English</option>
                        <option>Espanol</option>
                    </select>
                    <i className='fas fa-globe globe-icon'></i>
                </div>
            </div>
        </footer>
    )
}
