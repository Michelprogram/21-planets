import React, { useState } from 'react';
import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";
import { useUpdateUser, useUser } from '../context/UserContext';

const Login = () => {
    const updateUser = useUpdateUser();
    const user = useUser();

    const [connected, setConnected] = useState(true)
    
    return (
        <div>
            {user!="" ? <PretAchatPlanetes className='login'/> : <ConnexionEnregistrement className='login'/>}
            </div>
    );
};

export default Login;