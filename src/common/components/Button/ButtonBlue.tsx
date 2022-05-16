import React from 'react';
import {Link} from "react-router-dom";

const ButtonBlue = (props:any) =>{
    return(
        <Link to={props.link}>
            <li> <button type="button" className='button_blue'>{props.text}</button></li>    
        </Link>
    )
}

export default ButtonBlue