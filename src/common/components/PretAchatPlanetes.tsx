import React from 'react';
import ButtonBlue from './Button/ButtonBlue';

const PretAchatPlanetes = () =>{
    return(
        <div className="pret_achat_container">
           <h3>Prêt à acheter des planètes ?*</h3>
            <br />
            <p>*Tout achat en dehors de notre système solaire n'est pas remboursable. Pour toute plainte, s'addresser à notre avocat.</p>
            <br />
            <div id='acheter_button'>
                <ButtonBlue text="Acheter" link="/login"/>
            </div>
        </div>
    );
};

export default PretAchatPlanetes;