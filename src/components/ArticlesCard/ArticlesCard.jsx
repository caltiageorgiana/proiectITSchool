import './ArticlesCard.css';
import Card from 'react-bootstrap/Card';


function ArticlesCard(props) {

    const {oneArticle} = props;
    console.log('oneArticle', oneArticle);

    return(
        <div className="articles-card">
           <Card className='card-bootstrap'>
              <Card.Img src={oneArticle.urlToImage} className='article-image' />
              <Card.Body>
                 {/* <Card.Img src={oneArticle.urlToImage} className='article-image'/> */}
                 <Card.Title >{oneArticle.title}</Card.Title>
                 <Card.Text style={{'color': 'black'}}>{oneArticle.description}</Card.Text>
               </Card.Body>
           </Card>
           
        </div>
    )
}

export default ArticlesCard;