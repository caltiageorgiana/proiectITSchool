import './ArticlesList.css';
import ArticlesCard from '../ArticlesCard/ArticlesCard';
import { Link } from 'react-router-dom';

function ArticlesList(props) {

    const { articlesList } = props;

    // console.log('articlesList', articlesList)


    if (!Array.isArray(articlesList.articles)) {
        return <p>No articles here.</p>
    }


    return(
        <div className='articles-list'>
            {articlesList && articlesList.articles.map((article) => (
                <Link to={`/article-details/${article.id}`}>
                   <ArticlesCard key={article.id} oneArticle={article} />
                </Link>
            ))}
        </div>
    )
}

export default ArticlesList; 