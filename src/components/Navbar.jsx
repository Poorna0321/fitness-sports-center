import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Fitness Sports Center" />
                <span>FITNESS SPORTS CENTER</span>
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <button className="btn-cta desktop-only">Join Now</button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
            </button>
        </nav>
    )
}

export default Navbar