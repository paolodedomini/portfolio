import * as React from "react"
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
function Scritte({ app, mouseOut }) {
    const scritte = useRef()
    const quotes = useRef()
    const timeline = useRef()

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true, })
        timeline.current
            .add("start")
            .fromTo(scritte.current, { autoAlpha: .0, right: '-40%',filter: 'blur(50px)' }, { autoAlpha: .5, right: '0%',filter: 'blur(0px)', duration: 0.7, delay:1})
            .fromTo(quotes.current, {autoAlpha: 0, top:30}, {autoAlpha:0.7, top:0, duration: 0.7, delay:1 }, "<")
            .add("stop")
    }, [])

    useEffect(() => {
        mouseOut ? timeline.current.play(0) : timeline.current.reverse(0) 
    }, [mouseOut])

    return (
        <>
            <div className="scritte-home" >
                <h2 ref={scritte}>
                    {app.title}
                </h2>
                <div className="quotes" ref={quotes}>
                    <p dangerouslySetInnerHTML={{ __html: app.motto }} />
                        
                        <span>{app.autore}</span>
                    
                </div>
            </div>
        </>
    )
}

export default Scritte
