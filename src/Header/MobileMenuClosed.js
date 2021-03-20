import { VscMenu } from 'react-icons/vsc';

const MobileMenuClosed = ({toggleShowMenu}) => {
    return(
    <div className="nav-container menu">
        <VscMenu className="menu-icon" size="45px" fill="white" onClick={toggleShowMenu}/>
    </div>
    )
}

export default MobileMenuClosed;