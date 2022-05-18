import setClassName from '../../utils/ClassName';
import Formulaire from '../../common/components/Formulaire';

const ConnexionEnregistrement = ({className=''}) => {
    return (
        <div className={setClassName('connexion_enregistrement_container',className)}>
            <Formulaire titre='On vous connait déjà ?' submitText='Connectez-vous' submitTarget='/connecte' className='formulaire'/>
            <span className='separateur'/>
            <Formulaire titre='Nouveau sur la plateforme ?' submitText='Enregistrez-vous' submitTarget='/connecte' className='formulaire'/>
        </div>
    );
};
export default ConnexionEnregistrement;