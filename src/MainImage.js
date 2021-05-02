import img from './assets/lawfirm.jpeg';
import './MainImage.scss';

const MainImage = () => {
    return(
        <div className="image-container">
            <div className="blur-container">
                <img id="about" src={img} width={'100%'} alt={"Office of Callahan Lovecchio Law"}/>
            </div>
        </div>
    )
}

export default MainImage;