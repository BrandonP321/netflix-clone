import React from 'react'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import './index.css'
import SectionOne from '../../components/SectionOne'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div className='section-outer-wrapper'>
                <div className='section-flex-wrapper'>
                    <SectionOne />
                </div>
            </div>
        </>
    )
}
