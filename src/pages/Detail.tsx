import { useEffect, useState } from 'react';
import fetchAsteroides from '../api/asteroids';
import Description from '../common/components/Description';
import { useSelectedItem } from '../context/SelectedItemContext';

const Detail = () => {
    const selectedItem = useSelectedItem();
    const [data, setData] = useState<Array<any>>([])

    useEffect(() => {
        fetchAsteroides().then( (asteroides:Array<any>) => setData(asteroides))
    }, []);

    return (
        <div>
                <Description name={selectedItem} className="shop-description"/>
        </div>
    );
};

//data.map((el:INews, index:number)=><CardNews key={index}{...el}/>)

export default Detail;