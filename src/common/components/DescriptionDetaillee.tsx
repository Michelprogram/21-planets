import IDescription from "../../interfaces/IDescription";

const DescriptionDetaillee = ({data, className}:IDescription) => {
    return (
        <div className='description-detaillee'>
            <ul>
                <li>Nom complet : <p>{data.name}</p></li>
                <li>Référence NEO : <p>{data.neo_reference_id}</p></li>
                <li>Diamètre estimé : <p>{data.estimated_diameter_min}</p> - <p>{data.estimated_diameter_max}</p> km</li>
                <li>Superficie : <p>{data.superficie}</p> m3</li>
                <li>Hauteur Absolue : <p>{data.absolute_magnitude_h}</p> km</li>
                <li>Distance de la Terre : <p>{data.distance_from_earth}</p> km </li>
                <li>Vélocité : <p>{data.velocity}</p> km/h </li>
            </ul>
        </div>
    );
};

export default DescriptionDetaillee;