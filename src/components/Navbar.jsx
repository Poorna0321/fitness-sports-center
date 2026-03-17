import './Navbar.css';
import logo from '../assets/logo.jpg';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='Fitness Sports Center' />
                <span>Fitness Sports Center</span>
            </div>
            <ul className='navbar-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <button className='btn-cta'>Join Now</button>
        </nav>
    )
}

export default Navbar;