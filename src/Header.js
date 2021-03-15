import './Header.scss';
import logo from './assets/RCCL_3c.png'

const Header = () => {
    return(
        <header>
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
        </header>
    )
}

export default Header;