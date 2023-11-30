import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ProductsContainer({data}) {
    const mensProducts = data.filter(product => product.category === "men's clothing")
    const womensProducts = data.filter(product => product.category === "women's clothing")
    let womensProductsPart_1 = womensProducts.slice(0, 3)
    let womensProductsPart_2 = womensProducts.slice(3)
    const jewelleries = data.filter(product => product.category === "jewelery")
    const electronics = data.filter(product => product.category === "electronics")
  return (
    <div className='products-container'>
        <h2 className='category'>MEN'S CATEGORY</h2>
        <div className='mens-category'>
            {mensProducts.map(product => (
                <div className='mens-product' key={product.id}>
                    <div className='product-details'>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.image}/>
                        </Link>
                        <p className='product-name'>{product.title}</p>
                        <span className='deal'>Up to {Math.floor(Math.random() * 100)}% off</span>
                    </div>
                </div>
            ))}
        </div>
        <h2 className='category'>WOMEN'S CATEGORY</h2>
        <Carousel className='womens-carousel' data-bs-theme="dark">
            <Carousel.Item>
                <div className='womens-products-container'>
                    {womensProductsPart_1.map(product => (
                        <div className='womens-product' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={product.image} />
                            </Link>
                            <p className='product-name'>{product.title}</p>
                            <span className='great-deal'>GREAT DEAL </span><span className='deal'>Up to {Math.floor(Math.random() * 100)}% off</span>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='womens-products-container'>
                        {womensProductsPart_2.map(product => (
                                    <div className='womens-product' key={product.id}>
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.image} alt={product.image} />
                                        </Link>
                                        <p className='product-name'>{product.title}</p>
                                        <span className='great-deal'>GREAT DEAL </span><span className='deal'>Up to {Math.floor(Math.random() * 100)}% off</span>
                                    </div>
                        ))}
                </div>
            </Carousel.Item>
        </Carousel>
        <h2 className='category'>ELECTRONICS</h2>
        <div className='electronic-products-container'>
            {electronics.map(product => (
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.image}/>
                </Link>
            ))}
        </div>
        <h2 className='category'>JEWELLERIES</h2>
        <div className='jewels-container'>
            <Row xs={1} md={2} lg={2} className="g-4">
                {jewelleries.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <Col key={product.id} className='jewel-product-details'>
                            <Card>
                                <img src={product.image} alt={product.image} className='jewel-image'/>
                                <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Link>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default ProductsContainer
