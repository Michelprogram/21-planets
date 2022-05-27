import IFakeData from '../../../interfaces/IFakeData';
import usePanier from '../../hooks/panier';
import { Trash } from '../../../constants/Images';

const Articles = ({id, planete}: IFakeData) => {

    const {remove} = usePanier();

    return (
        <div className='container-article'>
            <img src={planete.icon} alt="" className="icon" />
            <p className='name'>{planete.name}</p>
            <p className='amount'>{planete.amount} $</p>
            <img className="trash" src={Trash} alt="" onClick={ () => remove(id) }/>
        </div>
    );
};

export default Articles;