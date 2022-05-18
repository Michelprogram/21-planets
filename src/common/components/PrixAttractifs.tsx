import React, { useContext } from 'react';
import setClassName from '../../utils/ClassName';
import PriceCard from './Card/PriceCard';

const PrixAttractifs = ({className=''}) => {
    
    return (
        <div className={setClassName('prix_attractifs',className)}>
            <h2>Des prix attractifs</h2>
            <br />
            <h4><q>Qui aurait cru qu’on pouvait aller si haut en dépensant si peu ?</q> - Gaspard, probablement</h4>

            <br /><br />
            <div className='price_cards'>
                <PriceCard logo="redGiants.svg" price="50 000 €" title="Le pack de deux géantes rouges" elements={['Aldébaran (Taureau)','Beltégeuse (Orion)']} link="/login"/>
                <PriceCard logo="saturn.svg" price="100 000 €" title="Saturne et ses anneaux" elements={['Des centaines de coloris disponibles','Mode holographique inclu']} link="/login"/>
                <PriceCard logo="blackHole.svg" price="5 200 000 000 €" title="3 trous noirs (2 + 1 gratuit)" elements={['Q0906+6930','Cygnus X-1','Le troisième au choix parmi des centaines de modèles']} link="/login"/>
            </div>
        </div>
    );
};
export default PrixAttractifs;