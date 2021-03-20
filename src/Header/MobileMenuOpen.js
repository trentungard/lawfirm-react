import { VscMenu } from 'react-icons/vsc';

const MobileMenuOpen = ({toggleShowMenu}) => {
    return(
        <div className="nav-container menu">
            <VscMenu className="menu-icon open" size="45px" fill="white" onClick={toggleShowMenu}/>
        </div>
    )
}

export default MobileMenuOpen;