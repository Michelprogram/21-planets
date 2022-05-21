import setClassName from '../../utils/ClassName';
import ButtonBlue from './Button/ButtonBlue';
import ButtonViolet from './Button/ButtonViolet';
import { useUser } from '../../context/UserContext';

const PretAchatPlanetes2 = ({className=''}) =>{
    const user:string = useUser();

    return(
        <div className={setClassName("pret_achat_2_container",className)}>
           <div className='title'>
            <h3>Prêt(e) à acheter des planètes ?</h3>
            <p>Demandez-nous la lune...</p>
           </div>
            
            <div className='buttons'>
                {user!='' ?  <ButtonBlue text="Acheter" link="/shop"/> : <ButtonViolet text="Connexion" link="/login"/>}
            </div>
        </div>
    );
};

export default PretAchatPlanetes2;