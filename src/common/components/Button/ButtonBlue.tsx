import React from 'react';
import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonBlue = ({link, text, submit} : IButton) =>{
    return(
        <div>
        { submit ? <input type="submit" value={text} formAction={link} className='button_blue' /> :
            <Link to={link}>
            <li> <button type="button" className='button_blue'>{text}</button></li>    
            </Link>
        }
        </div>
    )
}

export default ButtonBlue