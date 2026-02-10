import Carousel from 'react-bootstrap/Carousel';
import './herosection.css'
import image1 from '../images/main_image.png'
import 'animate.css';

function Herosection() {
  return (
    <Carousel data-bs-theme="dark" style={{borderRadius:'20px'}} >
      <Carousel.Item>
        <div className='carosul-main'>
          <div className="content animate__rollIn">
            <h3>beats solo</h3>
            <h2>Wireless</h2>
            <h1>HEADPHONE</h1>
            <button>Shop By Category</button>
          </div>
          <div className="image " > 
            <img src={image1} className='animate__animated  animate__zoomIn' alt="image 1" />
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className='carosul-main'>
          <div className="content ">
            <h3>beats solo</h3>
            <h2>Wireless</h2>
            <h1>HEADPHONE</h1>
            <button>Shop By Category</button>
          </div>
          <div className="image">
            <img src={image1} alt="image 1" />
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className='carosul-main'>
          <div className="content">
            <h3>beats solo</h3>
            <h2>Wireless</h2>
            <h1>HEADPHONE</h1>
            <button>Shop By Category</button>
          </div>
          <div className="image">
            <img src={image1} alt="image 1" />
          </div>
        </div>

      </Carousel.Item>




    </Carousel>
  );
}

export default Herosection;