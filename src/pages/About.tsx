import React, { useState } from 'react';
import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import LargeChoix from '../common/components/LargeChoix';
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";
import PretAchatPlanetes2 from '../common/components/PretAchatPlanetes2';
import PrixAttractifs from '../common/components/PrixAttractifs';

const About = () => {
    const [connected, setConnected] = useState(false)
    
    return (
        <div>
            <LargeChoix className='bloc'/>
            <PrixAttractifs className='bloc'/>
            <PretAchatPlanetes2 className='bloc'/>
            </div>
    );
};

/*<ButtonBlue text={"See More"} link={"/login"}/>
            <ButtonViolet text={"See More"} link={"/login"}/>
            <ButtonXL text={"Découvrir"} link={"/login"}/>
            <ButtonXLViolet text={"Découvrir"} link={"/login"}/>

            <br /><br />
            <ConnexionEnregistrement/>
            <PretAchatPlanetes2 className='pret-achat-planete-2'/>
            <Citation citation="Vers l'infini et au-delà..." auteur="Buzz l'éclair" className='citation'/>
            <PretAchatPlanetes/>
            <PrixAttractifs/>
            <LargeChoix/>*/
export default About;