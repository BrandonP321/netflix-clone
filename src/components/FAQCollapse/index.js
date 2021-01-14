import React, { useState, useRef } from 'react'
import './index.css'

export default function FAQCollapse(props) {
    const [open, setOpen] = useState(false)

    const textWrapper = useRef()
    const collapseBody = useRef()

    const toggleCollapse = () => {
        if (open) {
            // if collapse is open, set body height to 0
            collapseBody.current.style.height = '0px'
        } else {
            // if collapse is closed, get height of of text wrapper inside body and set body's height to same height
            const textHeight = textWrapper.current.clientHeight
            collapseBody.current.style.height = `${textHeight}px`
        }
        // toggle open state
        setOpen(!open)
    }

    return (
        <div className='faq-collapse'>
            <div className='header' onClick={toggleCollapse}>
                {props.question} <span className={`icon${open ? ' close' : ' open'}`}>&#43;</span>
            </div>
            <div ref={collapseBody} className='body'>
                <div ref={textWrapper} className='body-text-wrapper'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
