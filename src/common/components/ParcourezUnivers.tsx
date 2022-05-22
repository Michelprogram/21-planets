import React from 'react';
import ButtonViolet from './Button/ButtonViolet';
import setClassName from '../../utils/ClassName';

import { Planete4 as Planete } from '../../constants/Images';

const ParcourezUnivers = ({className = ''}) => {
    return (
        <div className={setClassName('container-univers', className)}>
            <div className="img-part">
                
            </div>
            <div className="text-part">
                <p className="title">Parcourez l’univers</p>
                <p className='description'>Avec notre collection toujours plus grande de corps célestes venus des plus lointaines galaxies, trouvez celui qui fera briller vos yeux. Sortez les téléscopes...</p>
                <ButtonViolet link="/about" text='En savoir plus' className="button-univers"/>
            </div>
        </div>
    );
};

export default ParcourezUnivers;