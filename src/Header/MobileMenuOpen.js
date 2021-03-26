import { VscMenu } from 'react-icons/vsc';

const MobileMenuOpen = ({toggleShowMenu}) => {
    return(
        <div className="nav-container menu open">
            <VscMenu className="menu-icon open" size="45px" fill="white" onClick={toggleShowMenu}/>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Areas of Practice</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenuOpen;