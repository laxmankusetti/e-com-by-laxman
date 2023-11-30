import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import basket from '../images/empty-basket.png'

function Cart() {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch()

  return (
    <div>
      <h2 className='cart-page-head'>Your CART-ITEMS</h2>
      <div className='cart-container'>
        {cartItems.length ? cartItems.map(cartItem => (
          <div className='cart-item' key={cartItem.id}>
            <img src={cartItem.image} alt={cartItem.image} className='cart-product-image'/>
            <h5>Price: ${cartItem.price}</h5>
            <h4>{cartItem.title}</h4>
            <button className='btn btn-primary'>Proceed to by</button>
            <button className='btn btn-danger' onClick={() => {dispatch({type:'remove', payload:cartItem})}}>DELETE ITEM</button>
          </div>
        )):<div className='cart-empty-msg'>
          <img src={basket} alt='empty-basket' className='empty-basket'/>
          <h2>Oh! ohh!! You have nothing in your CART <br/>
          <small>Please add items to your cart!!!</small>
          </h2>
        </div>
        }
      </div>
    </div>
  )
}

export default Cart
