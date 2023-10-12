import Carousel1 from '../Carousel1/Carousel1';
import './Home.css';


function Home(){

    return(
        <div className="home">
            <div className='home-text'>
              <h2 className='home-h2'>Bine ai venit, acesta este proiectul meu final!</h2>
              <p className='home-p'>Vezi toate știrile legate de fiecare categorie, apăsând pe imagine.</p>
            </div>
            <Carousel1/>
        </div>
    )
}

export default Home;