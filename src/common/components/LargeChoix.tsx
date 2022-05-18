import NouveauteCard from './Card/NouveauteCard';
import setClassName from '../../utils/ClassName';

const LargeChoix = ({className=''}) => {
    return (
        <div className={setClassName('large_choix',className)}>

            <div className='nouveaute_container'>
                <NouveauteCard nouveaute='Pendant une période limitée, gravez votre prénom et celui d’un proche sur un achat de votre choix pour seulement 240 999 000 € !' link='/login'/>
            </div>

            <div className='description_container'>
            <h2>Un large choix venu du ciel</h2>
            <p>21 Planets vous propose une collection de corps célestes inédite, jamais réalisée auparavant, incluant : </p>
            <br />
            <ul>
                <li>Des étoiles étincellantes (géantes rouges, naines, étoiles à neutrons...)</li>
                <li>Des astres massifs (trous noirs, trous de vers, quasar...)</li>
                <li>Des planètes vintage (la terre, jupiter, uranus...)</li>
            </ul>
            <br />
            <p>Les grands scientifiques l’avaient imaginé, nous l’avons réalisé. C’est un petit pas pour l’homme...</p>
            </div>
        </div>
    );
};
export default LargeChoix;