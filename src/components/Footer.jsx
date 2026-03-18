import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <span className="footer-logo">FITNESS SPORTS CENTER</span>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Fitness Sports Center. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer