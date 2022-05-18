import React, { useState } from 'react';
import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";

const Login = () => {
    const [connected, setConnected] = useState(false)
    
    return (
        <div>
            <Header/>
            {connected ? <PretAchatPlanetes className='login'/> : <ConnexionEnregistrement className='login'/>}
            <Footer/>
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
export default Login;