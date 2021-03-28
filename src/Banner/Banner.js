import './Banner.scss';

const Banner = () => {
    return(
        <div class="banner-container">
            <div class="child-container one">
                <div class="banner-image-container">
                    <img src="https://via.placeholder.com/100" />
                </div>
                <h3 class="banner-image-title">Criminal Defense</h3>
            </div>
            <div class="child-container two">
                <div class="banner-image-container">
                    <img src="https://via.placeholder.com/100" />
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