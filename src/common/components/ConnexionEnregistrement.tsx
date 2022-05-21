import setClassName from '../../utils/ClassName';
import Formulaire from '../../common/components/Formulaire';

const ConnexionEnregistrement = ({className=''}) => {
    return (
        <div className={setClassName('connexion_enregistrement_container',className)}>
            <Formulaire titre='On vous connait déjà ?' submitText='Connectez-vous' submitTarget='/connecte' type="connexion" errorMsg='Utilisateur inconnu' className='formulaire'/>
            <div className='separateur'/>
            <Formulaire titre='Nouveau sur la plateforme ?' submitText='Enregistrez-vous' submitTarget='/connecte' type="enregistrement" errorMsg='Cette utilisateur existe déjà' className='formulaire'/>
        </div>
    );
};
export default ConnexionEnregistrement;