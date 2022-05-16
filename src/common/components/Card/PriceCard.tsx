import React from 'react';
import ButtonViolet from '../Button/ButtonViolet';

const PriceCard = (props:any) =>{
    const elements = props.ex.map((element:any,index:any)=>{
        <h1 key={element}>{element}</h1>
    })

    return(
        <div className="price_card">
            <img src={props.priceCardLogo}/>
            <h2>{props.priceCardPrice}</h2>
            <h3>{props.priceCardTitle}</h3>

            {elements}

            <ButtonViolet text="Découvrir" link="/login"/>
        </div>
    );

    /*<div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h2>{country.capital}</h2>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>*/
};

export default PriceCard;