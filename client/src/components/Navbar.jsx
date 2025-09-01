import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

    const [toggleHamburger, setToggleHamgburger] = useState(false);

    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        navigate("/");

        setTimeout(() => {
            const el = document.getElementById("about-container");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    return (
        <div id='navbar-wrapper'>
            <nav id="navbar-container">
                <Link to='/'>Sean Jin</Link>
                <button class="menu-toggle" onClick={() => setToggleHamgburger(!toggleHamburger)}>☰</button>
                <ul id='navbar-options' className={`${toggleHamburger ? "active" : ""}`}>
                    <li className='navbar-options-element'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-options-element'>
                        <Link onClick={handleClick}>About</Link>
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