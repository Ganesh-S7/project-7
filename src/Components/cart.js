import React from 'react'
import './cart.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom';

const Cart = ({cart}) => {
  return (
    <>
    <section className='cart-sectcion'>
        <div className='cart-container'>
            <div className='cart-id'>
                <h3>Cart < MdOutlineShoppingCart/></h3>
            </div>
           
            <div className='empty-details'>
              <h3>Your Shopping cart is empty</h3>
              <button className='empty-btn'><Link to="/shop">Shop Now</Link></button>
            </div>
            <div className='empty'>
              <img src="http://localhost:3000//img/empty.webp" alt="empty" />
            </div>
        </div>
    </section>

    </>
  )
}

export default Cart;