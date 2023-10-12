import { useEffect, useState } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import './Tesla.css';

function Tesla(){

    const [ teslaFromApi, setTeslaFromApi] = useState({});

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-20&sortBy=popularity&apiKey=a35142c3568a49aaa3c33c33ae62699d')
           .then(res => res.json())
           .then(data => setTeslaFromApi(data))

    }, [])

    
    return(
        <div className="tesla">
            {/* <h1 style={{ fontWeight: '900px' }} >Tesla</h1> */}
            <h1>Tesla</h1>
            <ArticlesList articlesList={teslaFromApi}/>
            
        </div>
    )
}

export default Tesla;