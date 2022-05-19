import React, { useEffect, useState } from 'react';
import ButtonViolet from './Button/ButtonViolet';
import IFakeData from '../../interfaces/IFakeData';
import Articles from './Card/Articles';

import setClassName from '../../utils/ClassName';
import usePanier from '../hooks/panier';

const Panier = ({className = ""}) => {

    const {panier, total, size, superficie, masse,dist, longest} = usePanier()

    const [far, setFar] = useState("")

    const heightValue = () =>{
        return {height: 100*size()+"px"}
    }

    return (
        <div className={setClassName('container-panier',className)}>
            <div className="container-grid">
                <div className="price-list">
                    <div className="container-articles" style={heightValue()}>
                        {
                            panier.map((data:IFakeData, index: number)=> <Articles key={index} planete={data.planete} id={data.id}/>)
                        }
                    </div>
                </div>
                <div className="total">
                    <div className="container-inside">
                        <p>Résumé de votre panier</p>
                        <p>{total()} $</p>
                        <ButtonViolet link="/" text="Acheter" className="button-panier-acheter"/>
                    </div>
                </div>
                <div className="statistics">
                    <div className="container-inside">
                        <p className="title">Statistique</p>
                        <p className="superficie">Superficie total : <span>{superficie()} m3</span></p>
                        <p className="masse">Masse total : <span>{masse()} T</span></p>
                        <p className="far">Planete la plus loin : <span>{longest().planete.name}</span></p>
                        <p className="dist">Distance la plus loin : <span>{dist()} km</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panier;