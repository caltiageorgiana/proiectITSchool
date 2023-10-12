import Carousel from 'react-bootstrap/Carousel';
import './Carousel1.css';
import { Link } from 'react-router-dom';




  
function Carousel1() {
    return (
      <div className='carousel'>
      <Carousel fade className='full-carousel'>
        
        <Carousel.Item >
          <Link to='/tesla' > <img className='img-carousel' src='/img/tesla2.jpg' alt='tesla'/> </Link>
        </Carousel.Item>

        <Carousel.Item >
          <Link to='/apple'> <img className='img-carousel' src='/img/apple1.jpg' alt='apple'/> </Link>
        </Carousel.Item>

        <Carousel.Item >
        <Link to='/amazon'> <img className='img-carousel' src='/img/amazon1.jpg' alt='amazon' /> </Link>
        </Carousel.Item>

      </Carousel>
      </div>
    );
  }
  
  export default Carousel1;