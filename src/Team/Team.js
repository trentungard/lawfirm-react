import Card from '../Card/Card';
import ChrisPhoto from '../assets/chris.png';
import MattPhoto from '../assets/matt.jpeg';
import './Team.scss';

const chrisDesctiption = {
    short: "Chris and his family have had their roots within the Williamsport Area and Central Pennsylvania region for four decades. He graduated from Bucknell University in Lewisburg, PA and then received his Juris Doctorate from the Widener University School of Law in Harrisburg, PA...",
    long: "Chris and his family have had their roots within the Williamsport Area and Central Pennsylvania region for four decades. He graduated from Bucknell University in Lewisburg, PA and then received his Juris Doctorate from the Widener University School of Law in Harrisburg, PA. Chris has nearly twenty-years of experience as a passionate and skilled litigator in nearly every county of the Commonwealth, focusing primarily in the areas of Criminal Defense at both the state and federal level, Civil Law, and Employment Law including unemployment and workers’ compensation, wrongful termination, and workplace discrimination. Prior to joining this firm, Chris spent the first 18 years of his career with the Williamsport firm of Campana, Hoffa, Morrone & Lovecchio. As an attorney Chris has received multiple community and pro bono awards and takes great pride in his personal commitment to always being available to his clients in their times of need, and in his unmatched passion and drive to defend and advocate on their behalf. Chris is an avid soccer fan and staunch supporter of the Chelsea Football Club of the English Premier League. He has interjected his love of the sport within the Williamsport and surrounding communities as well, holding the positions of Assistant Coach and Head Coach for both the Williamsport and Loyalsock High School soccer teams. He has also been a volunteer coach with both the Roni’s Soccer Club and the AYSO soccer program. Above all else, Chris takes great pride in his immediate and extended family. He has three children and currently resides in Williamsport with his wife, Bradi."
}

const mattDescription = {
    short: "Matt grew-up in the Newberry section of Williamsport and graduated from the Williamsport Area High School in 2004. For 13 years prior to law school he worked the night shift as a laborer at the former Smurfit-Stone Container Corp., and then Lonza, Inc. in the city’s West End...",
    long: "Matt grew-up in the Newberry section of Williamsport and graduated from the Williamsport Area High School in 2004. For 13 years prior to law school he worked the night shift as a laborer at the former Smurfit-Stone Container Corp., and then Lonza, Inc. in the city’s West End. Matt was a proud member of the United Steelworkers International Union from 2005 – 2017, and for more than a decade of that time served his coworkers as an elected local union officer, holding the title of Shop Steward, Local Union Vice President and President, and Amalgamated Vice President. He was nominated by International Vice President Jon Geenen to serve as one of the United Steelworkers’ ambassadors to the very first AFL-CIO Young Workers Summit, and was an original member of the USW’s Next Generation Committee. To this day he stands in solidarity with all members of the working class and is a supporter of their causes. Matt graduated with a Bachelor’s Degree in Political Science from Lycoming College where he was admitted to Pi Sigma Alpha, the National Political Science Honor Society, Iota Nu chapter, and received Lycoming’s award for excellence in American Government Courses. He earned his Juris Doctorate from the Widener University Commonwealth Law School in Harrisburg, Pennsylvania in December 2019, where he graduated in the top 10% of his class. While at Widener, he was a member of the Commonwealth Law Review, the Dean’s List each semester, the Trial Advocacy Honor Society, and the Public Interest Law Society. He also was a Legal Intern with the Lycoming County Public Defender’s Office for more than one year, where he was certified by the Pennsylvania Supreme Court to represent criminal defendants under the supervision of the Chief Public Defender. Matt will sit for the Pennsylvania Bar Exam in February 2020, and upon passage will be an Associate Attorney with this firm practicing in Criminal Defense, Workers’ Compensation, and Family Law. He has two children and currently resides in Cogan Station, Pennsylvania. When he’s not with his children or in the office you can find him on one of the local golf courses."
}

const Team = () => {
    return(
        <div className="team-container">
            <h2 className="title">Our Team</h2>
            <div className="card-container">
                <Card className="card" src={ChrisPhoto} name={"Christopher Lovecchio"} title="Esquire" shortDescription={chrisDesctiption.short} longDescription={chrisDesctiption.long}/>
                <Card className="card" src={MattPhoto} name="Matthew Diemer" title="Esquire" shortDescription={mattDescription.short} longDescription={mattDescription.long}/>
            </div>
            <span id="contact" style={{position: 'relative', top: '-100px'}}></span>
        </div>
    )
}

export default Team;