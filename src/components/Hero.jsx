import './Hero.css';
import heroImg from '../assets/homeimg.jpg'

function Hero() {
    return (
        <section className='hero' id='home'>
            < div className="hero-content">
                <h1 className="hero-title">
                    <span className="white">TRANSFORM YOUR BODY</span>
                    <span className="gold">BUILD YOUR LEGACY</span>
                </h1>
                <p className="hero-subtitle">
                    Join Fitness Sports Center - Sri Lanka's premier training facility. Expert coaches, world-class equipment.
                </p>
                <button className="hero-btn">Start Your Journey</button>
                <div className="hero-image-wrapper">
                    <div className="hero-ring ring1"></div>
                    <div className="hero-ring ring2"></div>
                    <img src={heroImg} alt="Fitness" className="hero-image" />
                </div>
            </div>
        </section>
    )
}

export default Hero;