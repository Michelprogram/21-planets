import React, { useEffect, useState } from 'react';
import Planets from './Card/Planets';
import fakesData from "../../constants/fakeData";
import setClassName from '../../utils/ClassName';
import fetchAsteroides from '../../api/asteroids';
import IAsteroid from '../../interfaces/IAsteroide';
import AsteroideCard from './Card/AsteroideCard';

const Propositions = ({className = ""}) => {
    const [data, setData] = useState<Array<IAsteroid>>([])

    useEffect(() => {
        fetchAsteroides().then( (asteroides:Array<IAsteroid>) => setData(asteroides))
    }, []);

    return (
        <div className={setClassName('container-propositions', className)}>
            <p className='title'>Nos meilleur propositions ...</p>
            <p className='quote'>“Le temps et l'espace ne sont pas des conditions d'existence, le temps et l'espace sont un modèle de réflexion.” - Gaspard</p>
            <div className="best-propositions">
                {data.slice(0,4).map((el:any, index:number)=>
                 <AsteroideCard key={index} asteroide_data={el} />)}
            </div>
        </div>
    );
};

/*
const [data, setData] = useState(fakesData.slice(0,4))

return (
    <div className={setClassName('container-propositions', className)}>
        <p className='title'>Nos meilleur propositions ...</p>
        <p className='quote'>“Le temps et l'espace ne sont pas des conditions d'existence, le temps et l'espace sont un modèle de réflexion.” - Gaspard</p>
        <div className="best-propositions">
            {data.map((el, index:number)=> <Planets key={index} name={el.planete.name} forme={true}/>)}
        </div>
    </div>
);*/

export default Propositions;