import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div id='navbar-wrapper'>
            <nav id="navbar-container">
                <Link to='/'>Sean Jin</Link>
                <ul id='navbar-options'>
                    <li className='navbar-options-element'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-options-element'>
                        <Link to='/about'>About</Link>
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