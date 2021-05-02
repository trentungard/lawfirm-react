import './Banner.scss';
import { Law, WorkersComp } from '../assets/Icons'

const Banner = () => {
    return(
        <div className="banner-container">
            <div className="child-container one">
                <div className="banner-image-container">
                    <Law className="law-icon" />
                </div>
                <h3 className="banner-image-title" id="team">Criminal Defense</h3>
            </div>
            <div className="child-container two">
                <div className="banner-image-container">
                    <WorkersComp />
                </div>
                <h3 className="banner-image-title">Workers Compensation</h3>
            </div>
            <div className="more-container">
                <h4>Employment Law</h4>
                <h4>Family Law</h4>
                <h4>Landlord & tenant Law</h4>
            </div>
        </div>
    )
}

export default Banner;