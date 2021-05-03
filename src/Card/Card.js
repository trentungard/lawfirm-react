import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import './Card.scss';

const Card = ({className, src, name, title, shortDescription, longDescription}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(isExpanded);

    return isExpanded ? 
        <div className={className}>
            <img src={`${src}`} alt="Photo of Chris"/>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{longDescription}</p>
            <MdExpandMore className="rotated-carot" style={{transform: 'rotate(180deg)'}} size={30} fill="whitesmoke" onClick={() => setIsExpanded(!isExpanded)}/>
        </div>    
        :
        <div className={className} alt="Photo of Matt">
            <img src={`${src}`} />
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{shortDescription}</p>
            <div className="read-more-container"  onClick={() => setIsExpanded(!isExpanded)}>
                <p className="read-more">Read More</p>
                <MdExpandMore size={30} fill="whitesmoke"/>
            </div>
        </div>  
}

export default Card;