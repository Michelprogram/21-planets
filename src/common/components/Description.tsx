import { Asteroid } from "../../constants/Images";
import { useSelectedItem } from "../../context/SelectedItemContext";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import ButtonBlue from './Button/ButtonBlue';


const Description = ({name, className}:IDescription) => {
    const selectedItem = useSelectedItem();
    console.log(selectedItem)

    return (
        <div className={'description-container '+className}>
            <img src={Asteroid} alt="jeje" />

            <div className='description'>
                <h1>{name}</h1>

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
                    <p className='prix'>{randomNotFloor(5000, 6000)} $</p>
                    <ButtonBlue text='Ajouter au panier' link='/panier'/>
                </div>
            </div>
        </div>
    );
};

export default Description;