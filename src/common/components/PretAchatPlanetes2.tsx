import React from 'react';
import setClassName from '../../utils/ClassName';
import ButtonBlue from './Button/ButtonBlue';
import ButtonViolet from './Button/ButtonViolet';

const PretAchatPlanetes2 = ({className=''}) =>{
    return(
        <div className={setClassName("pret_achat_2_container",className)}>
           <div className='title'>
            <h3>Prêt à acheter des planètes ?</h3>
            <p>Connectez-vous</p>
           </div>
            
            <div className='buttons'>
                <ButtonBlue text="Acheter" link="/shop"/>
                <ButtonViolet text="Connexion" link="/login"/>
            </div>
        </div>
    );
};

export default PretAchatPlanetes2;