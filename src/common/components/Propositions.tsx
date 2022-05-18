import React, { useState } from 'react';
import Planets from './Card/Planets';
import fakesData from "../../constants/fakeData";

const Propositions = () => {

    const [data, setData] = useState(fakesData.slice(0,4))

    return (
        <div className='container-propositions'>
            <p className='title'>Nos meilleur propositions ...</p>
            <p className='quote'>“Le temps et l'espace ne sont pas des conditions d'existence, le temps et l'espace sont un modèle de réflexion.” - Gaspard</p>
            <div className="best-propositions">
                {data.map((el)=> <Planets name={el.name} forme={true}/>)}
            </div>
        </div>
    );
};

export default Propositions;