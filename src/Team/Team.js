import Card from '../Card/Card';
import ChrisPhoto from '../assets/chris.png';
import './Team.scss';

const chrisDesctiption = {
    short: "Chris and his family have had their roots within the Williamsport Area and Central Pennsylvania region for four decades. He graduated from Bucknell University in Lewisburg, PA and then received his Juris Doctorate from the Widener University School of Law in Harrisburg, PA...",
    long: "Chris and his family have had their roots within the Williamsport Area and Central Pennsylvania region for four decades. He graduated from Bucknell University in Lewisburg, PA and then received his Juris Doctorate from the Widener University School of Law in Harrisburg, PA. Chris has nearly twenty-years of experience as a passionate and skilled litigator in nearly every county of the Commonwealth, focusing primarily in the areas of Criminal Defense at both the state and federal level, Civil Law, and Employment Law including unemployment and workers’ compensation, wrongful termination, and workplace discrimination. Prior to joining this firm, Chris spent the first 18 years of his career with the Williamsport firm of Campana, Hoffa, Morrone & Lovecchio. As an attorney Chris has received multiple community and pro bono awards and takes great pride in his personal commitment to always being available to his clients in their times of need, and in his unmatched passion and drive to defend and advocate on their behalf. Chris is an avid soccer fan and staunch supporter of the Chelsea Football Club of the English Premier League. He has interjected his love of the sport within the Williamsport and surrounding communities as well, holding the positions of Assistant Coach and Head Coach for both the Williamsport and Loyalsock High School soccer teams. He has also been a volunteer coach with both the Roni’s Soccer Club and the AYSO soccer program. Above all else, Chris takes great pride in his immediate and extended family. He has three children and currently resides in Williamsport with his wife, Bradi."
}

const Team = () => {
    return(
        <div className="team-container">
            <h2 className="title">Our Team</h2>
            <div className="card-container">
                <Card className="card" src={ChrisPhoto} name="Christian Lovecchio" title="Esquire" shortDescription={chrisDesctiption.short} longDescription={chrisDesctiption.long}/>
            </div>
            <span id="contact" style={{position: 'relative', top: '-100px'}}></span>
        </div>
    )
}

export default Team;