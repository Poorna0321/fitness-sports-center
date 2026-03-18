import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <span className="eyebrow">ABOUT US</span>
                    <h2>More Than a Gym — A Community</h2>
                    <p>Founded in 2023, Fitness Sports Center was built for people who are serious about results. We provide professional coaching, state-of-the-art equipment, and a community that pushes you further.</p>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <h3>500+</h3>
                        <p>Members</p>
                    </div>
                    <div className="stat">
                        <h3>20+</h3>
                        <p>Expert Trainers</p>
                    </div>
                    <div className="stat">
                        <h3>5</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About