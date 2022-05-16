import React from 'react';
import {Link} from "react-router-dom";

const ButtonXL = (props:any) =>{
    return(
        <Link to={props.link}>
            <li> <button type="button" className='button_XL button_blue'>{props.text}</button></li>    
        </Link>
    )
}

export default ButtonXL