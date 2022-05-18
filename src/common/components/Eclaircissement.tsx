import React from 'react';
import setClassName from '../../utils/ClassName';

const Eclaircissement = ({className=''}) => {
    return (
        <div className={setClassName('container-eclaircissement',className)}>
            <p className="title">☄️ Besoin d’un éclaircissement ?</p>
            <div className="container-questions">
                <p>Votre planète ne répond plus ?</p>
                <p>Vos trous noirs ne sont pas noirs ?</p>
                <p>Un problème conçernant la brillance de vos étoiles ?</p>
                <p>Vous ne trouvez plus votre planète ?</p>
                <p>Vous voulez en savoir plus sur la garantie vol/casse de votre planète ?</p>
                <p>Vous soupçonnez vos trous noirs d’avoir avalés votre mère (ou autre...) ?</p>
            </div>
        </div>
    );
};

export default Eclaircissement;