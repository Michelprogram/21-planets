import React, { useState } from 'react';
import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";

const Login = () => {
    const [connected, setConnected] = useState(false)
    
    return (
        <div>
            {connected ? <PretAchatPlanetes className='bloc'/> : <ConnexionEnregistrement className='bloc'/>}
            </div>
    );
};

export default Login;