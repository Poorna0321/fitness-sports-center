import './Services.css'
import strengthImg from '../assets/card/strength.png'
import combatImg from '../assets/card/combat.png'
import yogaImg from '../assets/card/yoga.png'

function Services() {
    return (
        <section className="services" id="services">
            <div className="services-header">
                <span className="eyebrow">OUR SERVICES</span>
                <h2>What We Offer</h2>
            </div>
            <div className="services-cards">
                <div className="card">
                    <img src={strengthImg} alt="Strength Training" />
                    <div className="card-content">
                        <h3>Strength Training</h3>
                        <p>Build muscle, increase strength and push your limits with our expert-guided weight training programs.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={combatImg} alt="Combat Sport" />
                    <div className="card-content">
                        <h3>Combat Sport</h3>
                        <p>Master boxing, MMA and self-defence techniques under the guidance of our professional combat coaches.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={yogaImg} alt="Wellness & Yoga" />
                    <div className="card-content">
                        <h3>Wellness & Yoga</h3>
                        <p>Find balance, flexibility and inner peace with our relaxing yoga and mindfulness sessions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services