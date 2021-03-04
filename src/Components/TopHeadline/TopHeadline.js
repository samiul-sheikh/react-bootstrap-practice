import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=12780e2f84114c368bbdfdbd5b41113e';
        fetch(url)
            .then(res => res.json())
            .then(data =>setArticles(data.articles))
    }, [])

    return (
        <div>
            <h1>Top Articles: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;