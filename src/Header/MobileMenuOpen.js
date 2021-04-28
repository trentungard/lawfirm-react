import { VscMenu } from 'react-icons/vsc';

const MobileMenuOpen = ({toggleShowMenu}) => {
    return(
        <div className="nav-container menu open">
            <VscMenu className="menu-icon open" size="45px" fill="white" onClick={toggleShowMenu}/>
            <nav>
                <ul>
                    <li><a href="#about" style={{color: 'whitesmoke'}}>About Us</a></li>
                    <li><a href="#practice" style={{color: 'whitesmoke'}}>Areas of Practice</a></li>
                    <li><a href="#team" style={{color: 'whitesmoke'}}>Our Team</a></li>
                    <li><a href="#contact" style={{color: 'whitesmoke'}}>Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenuOpen;