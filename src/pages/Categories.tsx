import React from 'react';
import Title from '../common/components/Title';
import ITitle from "../interfaces/ITitle"

const Categories = ({title, color}:ITitle) => {

    return (
        <div className='container-categories-page'>
            <Title title={title} color={color}/>
        </div>
    );
};

export default Categories;