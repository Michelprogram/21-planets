import setClassName from '../../utils/ClassName';
import PriceCard from './Card/PriceCard';
import { RedGiant, Saturn, BlackHole } from "../../constants/Images";
import useData from '../hooks/Data';
import { useNavigate } from 'react-router-dom';
import IData from '../../interfaces/IData';
import { randomItemFromArray } from '../../utils/Random';
import { etoiles } from '../../constants/FlatIcons';
import { MILLION } from '../../constants/Price';

const PrixAttractifs = ({ className = '' }) => {
    const { apiData, propositionsItem } = useData();

    let navigate = useNavigate();
    if (!apiData) {
        navigate("/");
        return <div></div>;
    }

    return (
        <div className={setClassName('prix_attractifs', className)}>
            <h2>Des prix attractifs</h2>
            <br />
            <h4><q>Qui aurait cru qu’on pouvait aller si haut en dépensant si peu ?</q> - Gaspard, probablement</h4>

            <br /><br />
            <div className='price_cards'>
                {propositionsItem(2, "packs").map((el: IData, index: number) => {
                    return (
                        <PriceCard key={index} title="Le pack interstellaire" price={el.price + " $"} logo={el.image} elements={el.name.split("&")} link={"/detail/" + el.id} />
                    );
                })}

                 <PriceCard title="Les plus brillantes étoiles" price={"Entre 50 et 60 M$"} logo={randomItemFromArray(etoiles)} elements={['Des centaines de coloris disponibles et un mode holographique inclu, parfait pour les nuits solitaires']} link="/categories/etoiles" />

            </div>
        </div>
    );
};

export default PrixAttractifs;