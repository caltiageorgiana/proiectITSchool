import { useEffect, useState } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import './Amazon.css';

function Amazon(){

    const [ amazonFromApi, setAmazonFromApi] = useState({});

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=amazon&from=2023-09-20&sortBy=popularity&sortBy=popularity&apiKey=a35142c3568a49aaa3c33c33ae62699d')
           .then(res => res.json())
           .then(data => setAmazonFromApi(data))

    }, [])

    
    return(
        <div className="amazon">
            {/* <h1 style={{ fontWeight: '900px' }} >Tesla</h1> */}
            <h1>Amazon</h1>
            <ArticlesList articlesList={amazonFromApi}/>
            
        </div>
    )
}

export default Amazon;