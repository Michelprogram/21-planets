import React, { useEffect, useState } from 'react';
import ButtonViolet from './Button/ButtonViolet';
import IFakeData from '../../interfaces/IFakeData';
import Articles from './Card/Articles';

import fakesData from '../../constants/fakeData';

const Panier = () => {

    const [fakeData, setFakeData] = useState<Array<IFakeData>>(fakesData)

    const [total, setTotal] = useState(0)
    const [superficie, setSuperficie] = useState(0)
    const [masse, setMasse] = useState(0)
    const [far, setFar] = useState("")
    const [dist, setDist] = useState(0)

    useEffect(()=>{
        let total: number = 0; 
        for (let index = 0; index < fakeData.length; index++) {
            const element = fakeData[index];
            total += element.amount
        }
        total = parseInt(total.toFixed(2))
        setTotal(total)
    },[])

    const heightValue = () =>{
        return {height: 100*fakeData.length+"px"}
    }

    return (
        <div className='container-panier'>
            <div className="container-grid">
                <div className="price-list">
                    <div className="container-articles" style={heightValue()}>
                        {
                            fakeData.map((data:IFakeData, index: number)=> <Articles key={index} name={data.name} amount={data.amount}/>)
                        }
                    </div>
                </div>
                <div className="total">
                    <div className="container-inside">
                        <p>Résumé de votre panier</p>
                        <p>{total} $</p>
                        <ButtonViolet link="/" text="Acheter" className="button-panier-acheter"/>
                    </div>
                </div>
                <div className="statistics">
                    <div className="container-inside">
                        <p className="title">Statistique</p>
                        <p className="superficie">Superficie total : <span>{superficie} m3</span></p>
                        <p className="masse">Masse total : <span>{masse} T</span></p>
                        <p className="far">Planete la plus loin : <span>{far}</span></p>
                        <p className="dist">Distance la plus loin : <span>{dist} km</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panier;