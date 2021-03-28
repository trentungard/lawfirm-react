import './Header.scss';
import logo from '../assets/RCCL_3c.png';
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
                                <li>About Us</li>
                                <li>Areas of Practice</li>
                                <li>Our Team</li>
                                <li>Contact Us</li>
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