import React from 'react'
import Logo from '../img/navlogo.svg'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <div className='navBar'>
            <div className='navLogo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='navItems'>
                <a href='/home'>Home</a>
                <a href='/features'>Features</a>
                <a href='/pricing'>Pricing</a>
                <a href='/blog'>Blog</a>
                <a href='/contact'>Contact</a>
            </div>
            <div className='navButtons'>
                <button className='login'>Log in</button>
                <button className='start'>Get Started</button>
            </div>
            
        </div>
    )
}

export default Navbar
