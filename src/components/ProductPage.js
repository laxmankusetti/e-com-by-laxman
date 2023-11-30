import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Opps!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Sorry, This Product is FAKE.</h4>
        <p>
        I am showing my working skills here, so cannot proceed commercially. 
        Implementations such as authentication and payment are not developed here.
        <b>Because I didn't use any firewalls in this project, so I don't want to 
        take any sensitive information from you.</b>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProductPage({product,...props}) {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div className='product-page-container'>
            <div className='product-pic'>
                <img src={product.image} alt={product.image}/>
            </div>
            <div className='product-description'>
                <h3>{product.title}</h3>
                <b>${product.price}</b>
                <p>{product.description}</p>
                <div className='cart-buy-btns'>
                  <Button variant="outline-primary" onClick={() => setModalShow(true)}>Buy Now</Button>
                  <Button variant="outline-info"onClick={()=>{handleShow() ; dispatch({type:'add', payload:{...product}})}} className="me-2">Add To Cart</Button>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='cart-head'>Product Added</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id='cart-body'>
                <img src={product.image} alt={product.image} className='cart-image'/>
                <p className='cart-item-price'>Your Total- ${product.price}</p>
                <button className='cart-proceed-btn'>Proceed to Buy</button>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>  
  )
}

export default ProductPage
