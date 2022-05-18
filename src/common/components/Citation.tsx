import React from 'react';
import ButtonBlue from './Button/ButtonBlue';
import ICitation from "../../interfaces/ICitation";

const Citation = ({auteur, citation}:ICitation) =>{
    return(
        <div className="citation_container">
           <q>{citation}</q>
            <br />
            <span className='ball'/>
            <br />
            <p>-- {auteur}</p>
        </div>
    );
};

export default Citation;