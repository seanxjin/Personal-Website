import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

    const [toggleHamburger, setToggleHamgburger] = useState(false);

    return (
        <div id='navbar-wrapper'>
            <nav id="navbar-container">
                <Link to='/'>Sean Jin</Link>asdasdadasdasdsadas
                <button class="menu-toggle" onClick={() => setToggleHamgburger(!toggleHamburger)}>☰</button>
                <ul id='navbar-options' className={`${toggleHamburger ? "active" : ""}`}>
                    <li className='navbar-options-element'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-options-element'>
                        <Link to="/" onClick={() => document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' })}>About</Link>
                    </li>
                    <li className='navbar-options-element'>
                        <Link to='/experience'>Experience</Link>
                    </li>
                    <li className='navbar-options-element'>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};