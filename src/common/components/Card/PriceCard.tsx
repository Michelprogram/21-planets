import React from 'react';
import ButtonViolet from '../Button/ButtonViolet';
import IPriceCard from "../../../interfaces/IPriceCard";

const PriceCard = ({logo, price, title, elements, link}: IPriceCard) =>{

    return(
        <div className="price_card">
            <img src={'src/assets/images/svg/'+logo}/>
            <h3>{price}</h3>
            <h4>{title}</h4>

            <br />
            <p>Contient :</p>
            <ul>
                {elements.map((element:string)=>{
                    return(<li key={element}>{element}</li>)
                })}
            </ul>
            
            <div id='discover_button'>
                <ButtonViolet text="Découvrir" link={link}/>
            </div>
        </div>
    );

    /*<div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h2>{country.capital}</h2>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>*/
};

export default PriceCard;