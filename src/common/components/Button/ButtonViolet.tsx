import React from 'react';
import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonViolet = ({link, text} : IButton) =>{
    return(
        <Link to={link}>
            <li> <button type="button" className='button_purple'>{text}</button></li>    
        </Link>
    )
}

export default ButtonViolet