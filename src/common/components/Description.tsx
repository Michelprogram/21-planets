import { Asteroid } from "../../constants/Images";
import { useSelectedItem } from "../../context/SelectedItemContext";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import usePanier from "../hooks/panier";
import ButtonBlue from './Button/ButtonBlue';


const Description = ({data, className}:IDescription) => {
    const selectedItem = useSelectedItem();
    const {add} = usePanier();

    function addToCart(){
        add({
            id: 6,
            planete: {
              name: data.name_limited,
              amount: randomNotFloor(50000000, 60000000),
              superficie: randomNotFloor(50000000, 60000000),
              masse: randomNotFloor(50000000, 60000000),
              distanceFromEarth: Math.round(parseInt(data.distance_from_earth)),
            },
          });
    }

    return (
        <div className={'description-container '+className}>
            <img src={Asteroid} alt="jeje" />

            <div className='description'>
                <h1>{data.name_limited}</h1>

                <div className='description-detaillee'>
                    <ul>
                        <li>Nom complet : <p>{data.name}</p></li>
                        <li>Référence NEO : <p>{data.neo_reference_id}</p></li>
                        <li>Diamètre estimé : <p>{Math.round(data.estimated_diameter_min)}</p> - <p>{Math.round(data.estimated_diameter_max)}</p> km</li>
                        <li>Hauteur Absolue : <p>{Math.round(data.absolute_magnitude_h)}</p> km</li>
                        <li>Distance de la Terre : <p>{Math.round(parseInt(data.distance_from_earth))}</p> km </li>
                        <li>Vélocité : <p>{Math.round(data.velocity)}</p> km/h </li>
                    </ul>
                </div>

                <div className='achat'>
                    <p className='prix'>{randomNotFloor(5000, 6000)} $</p>
                    <ButtonBlue text='Ajouter au panier' link='/panier' action={addToCart}/>
                </div>
            </div>
        </div>
    );
};

export default Description;