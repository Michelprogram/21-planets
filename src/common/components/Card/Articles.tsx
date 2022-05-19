import React, { useState } from 'react';
import IFakeData from '../../../interfaces/IFakeData';

import PlanetsSVG from "../../../constants/images"
import { random } from '../../../utils/Random';

import { DeleteOutlined} from '@ant-design/icons';
import usePanier from '../../hooks/panier';

const Articles = ({name, amount, id}: IFakeData) => {

    const [icons, _] = useState<Array<string>>(PlanetsSVG)

    const {remove} = usePanier();

    const randomIcon = () :string =>{
        return icons[random(0, icons.length)]
    }

    return (
        <div className='container-article'>
            <img src={randomIcon()} alt="" className="icon" />
            <p className='name'>{name}</p>
            <p className='amount'>{amount} $</p>
            <DeleteOutlined onClick={ () => remove(id)}/>
        </div>
    );
};

export default Articles;