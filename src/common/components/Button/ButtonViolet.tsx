import React from 'react';
import {Link} from "react-router-dom";

const ButtonViolet = (props:any) =>{
    return(
        <Link to={props.link}>
            <li> <button type="button" className='button_purple'>{props.text}</button></li>    
        </Link>
    )
}

export default ButtonViolet