import { Asteroid } from "../../constants/Images";
import { useSelectedItem } from "../../context/SelectedItemContext";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import ButtonBlue from './Button/ButtonBlue';


const Description = ({data, className}:IDescription) => {
    const selectedItem = useSelectedItem();

    return (
        <div className={'description-container '+className}>
            <img src={Asteroid} alt="jeje" />

            <div className='description'>
                <h1>{data.name_limited}</h1>

                <div className='description-detaillee'>
                    <ul>
                        <li>Nom complet : <p>{data.name}</p></li>
                        <li>Référence NEO : <p>{data.neo_reference_id}</p></li>
                        <li>Diamètre estimé : <p>{data.estimated_diameter_min}</p> - <p>{data.estimated_diameter_max}</p> km</li>
                        <li>Hauteur Absolue : <p>{data.absolute_magnitude_h}</p> km</li>
                        <li>Distance de la Terre : <p>{data.distance_from_earth}</p> km </li>
                        <li>Vélocité : <p>{data.velocity}</p> km/h </li>
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