import React, { useEffect, useState } from 'react';
import fetchNews from "../api/news"
import INews from '../interfaces/INews';
import CardNews from '../common/components/Card/News';


const News = () => {

    const [data, setData] = useState<Array<INews>>([])

    const heightValue = () =>{
        return {height: 400*data.length+"px"}
    }

    useEffect(() => {
        fetchNews().then( (news:Array<INews>) => setData(news))
    }, []);

    return (
        <div className='container-news' style={heightValue()}>
            {
                data.map((el)=><CardNews {...el}/>)
            }
        </div>
    );
};

export default News;