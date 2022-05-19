import React from 'react';
import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonXL = ({link, text, submit} : IButton) =>{
    return(
        <div>
        { submit ? <button type="submit" formAction={link} className='button_XL button_blue'>{text}</button> :
            <Link to={link}>
            <li> <button type="button" className='button_XL button_blue'>{text}</button></li>    
            </Link>
        }
        </div>
    )
}

export default ButtonXL