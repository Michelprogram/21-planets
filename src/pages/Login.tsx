import ConnexionEnregistrement from "../common/components/ConnexionEnregistrement";
import PretAchatPlanetes from "../common/components/PretAchatPlanetes";
import { useUser } from '../context/UserContext';

const Login = () => {
    const user:string = useUser();
    
    return (
        <div>
            {user!="" ? <PretAchatPlanetes className='login'/> : <ConnexionEnregistrement className='login'/>}
            </div>
    );
};

export default Login;