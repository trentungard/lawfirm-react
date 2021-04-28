import './Header.scss';
import logo from '../assets/logo.png';
import { useState } from 'react';
import MobileMenuClosed from './MobileMenuClosed';
import MobileMenuOpen from './MobileMenuOpen';

const Header = ({viewWidth}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    if(viewWidth > 650){
        return(
            <header>
                <div className="wrapper">
                    <div className="logo-container">
                        <img src={logo} alt="Callahan Lovecchio Law Logo"/>
                    </div>
                    <div className="name-container">
                        <h1>Callahan Lovecchio Law</h1>
                        <h2>Experience that shows, energy that wins.</h2>
                    </div>
                    <div className="nav-container">
                        <nav>
                            <ul>
                                <li><a href="#about" style={{color: 'whitesmoke'}}>About Us</a></li>
                                <li><a href="#practice" style={{color: 'whitesmoke'}}>Areas of Practice</a></li>
                                <li><a href="#team" style={{color: 'whitesmoke'}}>Our Team</a></li>
                                <li><a href="#contact" style={{color: 'whitesmoke'}}>Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    } else {
        return(
            <header style={{"padding": '30px 0 0 0'}}>
                <div className="wrapper">
                    <div className="logo-container">
                        <img src={logo} alt="Callahan Lovecchio Law Logo"/>
                    </div>
                    <div className="name-container">
                        <h1>Callahan Lovecchio Law</h1>
                        <h2>Experience that shows, energy that wins.</h2>
                    </div>
                    { showMenu ? <MobileMenuOpen toggleShowMenu={toggleShowMenu} /> : <MobileMenuClosed toggleShowMenu={toggleShowMenu} /> }
                </div>
            </header>
        )
    }
}

export default Header;