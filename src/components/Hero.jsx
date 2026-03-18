import './Hero.css';

function Hero() {
    return (
        <section className='hero' id='home'>
            < div className="hero-content">
                <h1 className="hero-title">
                    <span className="white">TRANSFORM YOUR BODY</span>
                    <span className="gold">BUILD YOUR LEGACY</span>
                </h1>
                <p className="hero-subtitle">
                    Founded in 2023, Fitness Sports Center was built for people who are serious about results. We provide professional coaching, state-of-the-art equipment, and a community that pushes you further.
                </p>
                <button className="hero-btn">Start Your Journey</button>
                <div className="hero-circle"></div>
            </div>
        </section>
    )
}

export default Hero;