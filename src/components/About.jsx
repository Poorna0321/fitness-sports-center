import { useState, useEffect, useRef } from 'react'
import './About.css'

function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0
                const step = target / (duration / 16)
                const timer = setInterval(() => {
                    start += step
                    if (start >= target) {
                        setCount(target)
                        clearInterval(timer)
                    } else {
                        setCount(Math.floor(start))
                    }
                }, 16)
                observer.disconnect()
            }
        })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return { count, ref }
}

function About() {
    const members = useCountUp(500)
    const trainers = useCountUp(20)
    const years = useCountUp(5)

    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <span className="eyebrow">ABOUT US</span>
                    <h2>More Than a Gym - A Community</h2>
                    <p>Founded in 2023, Fitness Sports Center was built for people who are serious about results. We provide professional coaching, state-of-the-art equipment, and a community that pushes you further.</p>
                </div>
                <div className="about-stats">
                    <div className="stat" ref={members.ref}>
                        <h3>{members.count}+</h3>
                        <p>Members</p>
                    </div>
                    <div className="stat" ref={trainers.ref}>
                        <h3>{trainers.count}+</h3>
                        <p>Expert Trainers</p>
                    </div>
                    <div className="stat" ref={years.ref}>
                        <h3>{years.count}</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About