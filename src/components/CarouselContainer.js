import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import truck from '../images/truck.svg'

function ControlledCarousel({data}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className='head-carousel'>
      {data.map(product => {
        return(
            <Carousel.Item key={product.id}>
                <div className='carousel-product'>
                    <img src={product.image} alt={product.image} className='carousel-product-image'/>
                    <div className='carousel-product-details'>
                      <h6>Starting from &#x20B9;{Math.floor(Math.random() * 1000)}</h6>
                      <h5>Free delivery on first delivery <img src={truck} alt='a truck'/></h5>
                      <small className='carousel-bank-offer'>
                        GET upto 25% off with e-com EASY Bank
                      </small>
                    </div>
                </div>
                <Carousel.Caption>
                  <h4 className='carousel-product-title'>{product.title}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default ControlledCarousel;