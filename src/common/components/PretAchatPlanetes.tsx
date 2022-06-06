import setClassName from '../../utils/ClassName';
import ButtonBlue from './Button/ButtonBlue';
import { useUpdateUser, useUser } from '../../context/UserContext';
import ButtonViolet from './Button/ButtonViolet';

const PretAchatPlanetes = ({className=''}) =>{
    const user = useUser();
    const updateUser = useUpdateUser();

    const disconnect = () => {
        updateUser("");
    }

    return(
        <div className={setClassName("pret_achat_container",className)}>
           <h3>Bienvenu {user}, prêt(e) à acheter des planètes ?*</h3>
            <br />
            <p>*Tout achat en dehors de notre système solaire n'est pas remboursable. Pour toute plainte, s'addresser à notre avocat.</p>
            <br />
            <div className='buttons'>
                <ButtonBlue text="Acheter" link="/shop"/>
                <ButtonViolet text='Se déconnecter' link='/login' action={disconnect}/>
            </div>
        </div>
    );
};

export default PretAchatPlanetes;