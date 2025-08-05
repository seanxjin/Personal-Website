import './Navbar.css';

export default function Navbar() {

    return (
        <div id='navbar-wrapper'>
            <nav id="navbar-container">
                <a href='/'>Sean Jin</a>
                <ul id='navbar-options'>
                    <li className='navbar-options-element'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='navbar-options-element'>
                        <a href='/about'>About</a>
                    </li>
                    <li className='navbar-options-element'>
                        <a href='/experience'>Experience</a>
                    </li>
                    <li className='navbar-options-element'>
                        <a href='/projects'>Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};