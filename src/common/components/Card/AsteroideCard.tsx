import React from 'react';
import IPlanete from '../../../interfaces/IPlanete';
import {Link} from "react-router-dom";
import { useUpdateSelectedItem } from '../../../context/SelectedItemContext';
import IAsteroid from '../../../interfaces/IAsteroide';


const AsteroideCard = ({name,name_limited, neo_reference_id, estimated_diameter_min, estimated_diameter_max, absolute_magnitude_h, distance_from_earth, velocity}:IAsteroid) => {

    const updateSelectedItem = useUpdateSelectedItem();
    function update(){
        var newData = {name,name_limited, neo_reference_id, estimated_diameter_min, estimated_diameter_max, absolute_magnitude_h, distance_from_earth, velocity}

        updateSelectedItem(newData);
    }
    
    return (
        <div className='container-card-planete'>
            <div className="top-side">
                <div className="round"></div>    
            </div>
            <div className="description">
                <div>
                    <p className="title">{name_limited}</p>

                    <Link to="/detail" onClick={update}>
                        <p>Voir plus &gt;</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AsteroideCard;