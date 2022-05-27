import React from 'react';
import IPlanete from '../../../interfaces/IPlanete';
import {Link} from "react-router-dom";
import { useUpdateSelectedItem } from '../../../context/SelectedItemContext';
import IAsteroid from '../../../interfaces/IAsteroide';


const AsteroideCard = (props:any) => {

    const updateSelectedItem = useUpdateSelectedItem();
    function update(){
        updateSelectedItem(props.asteroide_data);
    }
    
    return (
        <div className='container-card-planete'>
            <div className="top-side">
                <div className="round"></div>    
            </div>
            <div className="description">
                <div>
                    <p className="title">{props.asteroide_data.name_limited}</p>

                    <Link to="/detail" onClick={update}>
                        <p>Voir plus &gt;</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AsteroideCard;