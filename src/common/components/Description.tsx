import IPlanete from '../../interfaces/IPlanete';
import setClassName from '../../utils/ClassName';
import { Asteroid } from "../../constants/Images";
import ButtonBlue from './Button/ButtonBlue';


const Description = ({className=''}) => {
    return (
        <div className={setClassName('description-container',className)}>
            <img src={Asteroid} alt="jeje" />

            <div className='description'>
                <h1>B612</h1>

                <div className='description-detaillee'>
                    <ul>
                        <li>Nom complet : <p>...</p></li>
                        <li>Référence NEO : <p>...</p></li>
                        <li>Diamètre estimé : <p>...</p> - <p>...</p> km</li>
                        <li>Hauteur Absolue : <p>...</p> km</li>
                        <li>Distance de la Terre : <p>...</p> km </li>
                        <li>Vélocité : <p>...</p> km/h </li>
                    </ul>
                </div>

                <div className='achat'>
                    <p className='prix'>4 555 $</p>
                    <ButtonBlue text='Ajouter au panier' link='/panier'/>
                </div>
            </div>
        </div>
    );
};

export default Description;