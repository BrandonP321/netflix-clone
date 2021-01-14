import React from 'react'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import './index.css'
import SectionOne from '../../components/SectionOne'
import SectionTwo from '../../components/SectionTwo'
import SectionThree from '../../components/SectionThree'
import FAQCollapse from '../../components/FAQCollapse'
import MembershipForm from '../../components/MembershipForm'

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
            <div className='section-outer-wrapper'>
                <div className='section-flex-wrapper'>
                    <SectionTwo />
                </div>
            </div>
            <div className='section-outer-wrapper'>
                <div className='section-flex-wrapper'>
                    <SectionThree />
                </div>
            </div>
            <div className='section-outer-wrapper'>
                <div className='faq-section'>
                    <h2>Frequently Asked Questions</h2>
                    <FAQCollapse question='What is Netflix?'>
                        Netflix is a streaming service that offers a wide variety
                        of award-winning TV shows, movies, anime, documentaries, and
                        more on thousands of internet-connected devices.<br /><br />
                        You can watch as much as you want, whenever you want without
                        a single commercial – all for one low monthly price. There's
                        always something new to discover and new TV shows and movies
                        are added every week!
                    </FAQCollapse>
                    <FAQCollapse question='How much does Netflix cost?'>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                        streaming device, all for one fixed monthly fee. Plans range from
                        $8.99 to $17.99 a month. No extra costs, no contracts.
                    </FAQCollapse>
                    <FAQCollapse question='Where can I watch?'>
                        Watch anywhere, anytime, on an unlimited number of devices. Sign in
                        with your Netflix account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected device that
                        offers the Netflix app, including smart TVs, smartphones, tablets,
                        streaming media players and game consoles.<br /><br />You can also
                        download your favorite shows with the iOS, Android, or Windows 10 app.
                        Use downloads to watch while you're on the go and without an internet
                        connection. Take Netflix with you anywhere.
                    </FAQCollapse>
                    <FAQCollapse question='How do I cancel?'>
                        Netflix is flexible. There are no pesky contracts and no commitments.
                        You can easily cancel your account online in two clicks. There are no
                        cancellation fees – start or stop your account anytime.
                    </FAQCollapse>
                    <FAQCollapse question='What can I watch on Netflix?'>
                        Netflix has an extensive library of feature films, documentaries, TV
                        shows, anime, award-winning Netflix originals, and more. Watch as much
                        as you want, anytime you want.
                    </FAQCollapse>
                    <div className='form-wrapper'>
                        <MembershipForm />
                    </div>
                </div>
            </div>
        </>
    )
}
