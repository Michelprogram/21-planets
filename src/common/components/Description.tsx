import { useState } from "react";
import { Asteroid } from "../../constants/Images";
import { useSelectedItem } from "../../context/SelectedItemContext";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import usePanier from "../hooks/panier";
import ButtonBlue from './Button/ButtonBlue';


const Description = ({data, className}:IDescription) => {
    const selectedItem = useSelectedItem();
    const [buttonText, setButtonText] = useState("Ajouter au panier");
    const {add,size} = usePanier();

    //---------------------------------------description data--------------------------------------------------
    const name = data.name;
    const neoRef = data.neo_reference_id;
    const diameter_min = Math.round(data.estimated_diameter.kilometers.estimated_diameter_min);
    const diameter_max = Math.round(data.estimated_diameter.kilometers.estimated_diameter_max);
    const hauteur_abs = Math.round(data.absolute_magnitude_h);
    const earth_distance = Math.round(parseInt(data.close_approach_data[0].miss_distance.kilometers));
    const velocity = Math.round(data.close_approach_data[0].relative_velocity.kilometers_per_hour);
    const prix = (diameter_max-diameter_min)*5000;
    const superficie = (3.14*4*((diameter_max-diameter_min)/2)^2)*1000;
    //---------------------------------------------------------------------------------------------------------

    function addToCart(){
        add({
            id: size() + 1,
            planete: {
              name: data.name_limited,
              amount: prix,
              superficie: superficie,
              masse: randomNotFloor(50000000, 60000000),
              distanceFromEarth: earth_distance,
            },
          });

          setButtonText("Ajouté !");
    }

    return (
        <div className={'description-container '+className}>
            <img src={Asteroid} alt="jeje" />

            <div className='description'>
                <h1>{data.name_limited}</h1>

                <div className='description-detaillee'>
                    <ul>
                        <li>Nom complet : <p>{name}</p></li>
                        <li>Référence NEO : <p>{neoRef}</p></li>
                        <li>Diamètre estimé : <p>{diameter_min}</p> - <p>{diameter_max}</p> km</li>
                        <li>Superficie : <p>{superficie}</p> m3</li>
                        <li>Hauteur Absolue : <p>{hauteur_abs}</p> km</li>
                        <li>Distance de la Terre : <p>{earth_distance}</p> km </li>
                        <li>Vélocité : <p>{velocity}</p> km/h </li>
                    </ul>
                </div>

                <div className='achat'>
                    <p className='prix'>{prix} $</p>
                    <ButtonBlue text={buttonText} action={addToCart}/>
                </div>
            </div>
        </div>
    );
};

export default Description;