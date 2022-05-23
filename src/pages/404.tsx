import React from 'react';

import { NotFound as ErrorSVG } from '../constants/Images';
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <div className='container-error-page'>
            <img src={ErrorSVG} alt="" />
            <p>Vous semblez perdu, laissez moi vous ramenez sur la bonne planète -&gt; <Link to={"/"}>🌎</Link></p>
        </div>
    );
};

export default NotFound;