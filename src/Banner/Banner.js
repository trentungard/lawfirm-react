import './Banner.scss';
import { Law, WorkersComp } from '../assets/Icons'

const Banner = () => {
    return(
        <div class="banner-container">
            <div class="child-container one">
                <div class="banner-image-container">
                    <Law className="law-icon" />
                </div>
                <h3 class="banner-image-title" id="team">Criminal Defense</h3>
            </div>
            <div class="child-container two">
                <div class="banner-image-container">
                    <WorkersComp />
                </div>
                <h3 class="banner-image-title">Workers Compensation</h3>
            </div>
            <div class="more-container">
                <h4>Employment Law</h4>
                <h4>Family Law</h4>
                <h4>Landlord & tenant Law</h4>
            </div>
        </div>
    )
}

export default Banner;