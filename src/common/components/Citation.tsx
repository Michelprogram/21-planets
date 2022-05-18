import React from 'react';
import ButtonBlue from './Button/ButtonBlue';
import ICitation from "../../interfaces/ICitation";
import setClassName from '../../utils/ClassName';

const Citation = ({auteur, citation, className}:ICitation) =>{
    return(
        <div className={"citation_container "+className}>
           <q>{citation}</q>
            <br />
            <span className='ball'/>
            <br />
            <p>-- {auteur}</p>
        </div>
    );
};

export default Citation;