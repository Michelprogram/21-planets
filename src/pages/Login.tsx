import React, { useState } from 'react';
import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";

const Login = () => {
    const [connected, setConnected] = useState(true)
    
    return (
        <div>
            {connected ? <PretAchatPlanetes className='login'/> : <ConnexionEnregistrement className='login'/>}
            </div>
    );
};

export default Login;