import * as React from "react"
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
function Scritte({ app, mouseOut }) {
    const scritte = useRef()
    const timeline = useRef()

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true, })
        timeline.current
            .add("start")
            .fromTo(scritte.current, { autoAlpha: .0 }, { autoAlpha: 1,  duration:0.7 })
            .add("stop")
    },[])

    useEffect(() => {
        mouseOut ? timeline.current.play(0) : timeline.current.reverse(0)

    }, [mouseOut])
console.log(mouseOut);
    return (
        <>
            <div className="scritte-home" ref={scritte}>{app}</div>
        </>
    )
}

export default Scritte
