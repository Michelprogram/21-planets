import React from 'react';
import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonXL = ({link, text} : IButton) =>{
    return(
        <Link to={link}>
            <li> <button type="button" className='button_XL button_blue'>{text}</button></li>    
        </Link>
    )
}

export default ButtonXL