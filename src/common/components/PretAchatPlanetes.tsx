import React from 'react';
import setClassName from '../../utils/ClassName';
import ButtonBlue from './Button/ButtonBlue';
import { useUser } from '../../context/UserContext';

const PretAchatPlanetes = ({className=''}) =>{
    const user = useUser();

    return(
        <div className={setClassName("pret_achat_container",className)}>
           <h3>Bienvenu {user}, prêt(e) à acheter des planètes ?*</h3>
            <br />
            <p>*Tout achat en dehors de notre système solaire n'est pas remboursable. Pour toute plainte, s'addresser à notre avocat.</p>
            <br />
            <div id='acheter_button'>
                <ButtonBlue text="Acheter" link="/shop"/>
            </div>
        </div>
    );
};

export default PretAchatPlanetes;