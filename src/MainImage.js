import img from './assets/gavel.jpg';
import './MainImage.scss';

const MainImage = () => {
    return(
        <div className="image-container">
            <img id="about" src={img} width={'100%'} alt={"Office of Callahan Lovecchio Law"}/>
        </div>
    )
}

export default MainImage;