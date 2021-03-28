import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md'

const Card = ({src, name, description}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(isExpanded);

    return isExpanded ? 
        <div>
            <img src={`${src}`} />
            <h3>{name}</h3>
            <p>{description} and more</p>
            <MdExpandMore fill="#494949" onClick={() => setIsExpanded(!isExpanded)}/>
        </div>    
        :
        <div>
            <img src={`${src}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <MdExpandMore fill="#494949" onClick={() => setIsExpanded(!isExpanded)}/>
        </div>  
}

export default Card;