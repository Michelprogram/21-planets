import React, { useState } from 'react';
import IFakeData from '../../../interfaces/IFakeData';

import PlanetsSVG from "../../../constants/images"
import { random } from '../../../utils/Random';


const Articles = ({name, amount}: IFakeData) => {

    const [icons, _] = useState<Array<string>>(PlanetsSVG)

    const randomIcon = () :string =>{
        return icons[random(0, icons.length)]
    }

    return (
        <div className='container-article'>
            <img src={randomIcon()} alt="" className="icon" />
            <p className='name'>{name}</p>
            <p className='amount'>{amount} $</p>
        </div>
    );
};

export default Articles;