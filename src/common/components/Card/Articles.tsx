import React, { useState } from 'react';
import IFakeData from '../../../interfaces/IFakeData';

import VaporWave from "../../../assets/images/svg/vaporwave.svg"
import Uranus from "../../../assets/images/svg/uranus.svg"
import Saturn from "../../../assets/images/svg/saturn.svg"
import Neptune from "../../../assets/images/svg/neptune.svg"
import Planete from "../../../assets/images/svg/planet.svg"
import Pluto from "../../../assets/images/svg/pluto.svg"
import Venus from "../../../assets/images/svg/venus.svg"
import { random } from '../../../utils/Random';


const Articles = ({name, amount}: IFakeData) => {

    const [icons, _] = useState<Array<string>>([VaporWave, Uranus, Saturn, Neptune, Planete, Pluto, Venus])

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