import React from 'react';
import INews from '../../../interfaces/INews';

const News = ({title, url, imageUrl, newsSite, summary, publishedAt }:INews) => {
    
    const convertDate = (date: string):string =>{
        return new Date(date).toLocaleDateString().replaceAll('/','-')
    }

    const openArticle = (url: string) =>{
        window.open(url, '_blank')
    }
    
    return (
        <div className='container-news-card'>
            <div className='parent-div'>
                <div className="left-part">
                    <img className="cover" src={imageUrl} alt="" onClick={() => openArticle(url)}/>
                    <div className='text-part'>
                        <p className="date">{convertDate(publishedAt)}</p>
                        <p className="site">{newsSite}</p>
                    </div>
                </div>
                <div className="right-part">
                    <p className="title">{title}</p>
                    <p className="summary">{summary}</p>
                    <a href={url} className="consultez" target="_blank">Consultez l'article &gt;</a>
                </div>
            </div>
        </div>
    );
};

export default News;