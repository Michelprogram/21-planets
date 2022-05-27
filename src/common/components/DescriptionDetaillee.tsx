import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";


const DescriptionDetaillee = ({data, className}:IDescription) => {

    //---------------------------------------global data---------------------------------------------------
    const name = data.name;

    //---------------------------------------asteroid data--------------------------------------------------
    const superficie = (3.14*4*((randomNotFloor(2000,3000))/2)^2)*1000;
    //---------------------------------------------------------------------------------------------------------


    return (
        <div className='description-detaillee'>
            <ul>
                <li>Nom complet : <p>{name}</p></li>
                <li>Référence NEO : <p>{data.neo_reference_id}</p></li>
                <li>Diamètre estimé : <p>{data.diameter_min}</p> - <p>{data.diameter_max}</p> km</li>
                <li>Superficie : <p>{superficie}</p> m3</li>
                <li>Hauteur Absolue : <p>{data.hauteur_abs}</p> km</li>
                <li>Distance de la Terre : <p>{data.earth_distance}</p> km </li>
                <li>Vélocité : <p>{data.velocity}</p> km/h </li>
            </ul>
        </div>
    );
};

export default DescriptionDetaillee;