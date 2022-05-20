import React, { useEffect, useState } from 'react';
import fetchNews from "../api/news"
import INews from '../interfaces/INews';


const News = () => {

    const [data, setData] = useState<Array<INews>>([])

    useEffect(() => {
    fetchNews().then(news => setData(news))
    }, []);

    return (
        <div>
            {
                data.map((el,index)=><p>{el.summary}</p>)
            }
        </div>
    );
};

export default News;