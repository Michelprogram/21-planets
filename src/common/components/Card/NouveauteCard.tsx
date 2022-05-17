import React from 'react';
import INouveauteCard from "../../../interfaces/INouveauteCard";
import ButtonXLViolet from '../Button/ButtonXLViolet';

const NouveauteCard = ({nouveaute, link}:INouveauteCard) =>{
    return(
        <div className="nouveaute_card">
           <h3>Nouveau !</h3>
            <br />
            <p>{nouveaute}</p>
            <div id='discover_button'>
                <ButtonXLViolet text="J'en profite" link={link}/>
            </div>
        </div>
    );
};

export default NouveauteCard;