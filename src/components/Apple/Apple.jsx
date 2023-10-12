import { useEffect, useState } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import './Apple.css';

function Apple(){

    const [ appleFromApi, setAppleFromApi] = useState({});

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2023-09-20&sortBy=popularity&sortBy=popularity&apiKey=a35142c3568a49aaa3c33c33ae62699d')
           .then(res => res.json())
           .then(data => setAppleFromApi(data))

    }, [])

    
    return(
        <div className="apple">
            {/* <h1 style={{ fontWeight: '900px' }} >Tesla</h1> */}
            <h1>Apple</h1>
            <ArticlesList articlesList={appleFromApi}/>
            
        </div>
    )
}

export default Apple;