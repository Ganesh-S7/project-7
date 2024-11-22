import React from 'react'
import './styles/cart.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import {Link} from 'react-router-dom';

const Cart = ({cart ,setcart}) => {

  const total = cart.reduce((price, item)=> price + item.qty * item.price + 5, 0)
  const qnty = cart.reduce((total  ,item)=> total + item.qty , 0)
  const disc = cart.reduce((total  ,item)=> total + item.discount *item.qty -item.price  , 0)
  const price = cart.reduce((total  ,item)=> total + item.discount *item.qty , 0)

  const incqty = (pdt) =>{
  const exist = cart.find((x)=>{
    return x.id === pdt.id
  })
  setcart(cart.map((products)=>{
    return products.id === pdt.id ? {...exist, qty: exist.qty + 1} : products
  }))
  }

  const decqty = (pdt) =>{
  const exist = cart.find((x)=>{
    return x.id === pdt.id
  })

  if(exist.qty <= 1)
    {
      setcart(cart.filter((products)=>{
        return products.id !== pdt.id
      }))
    }else{
  setcart(cart.map((products)=>{
    return products.id === pdt.id ? {...exist, qty: exist.qty - 1} : products
  }))
  }
}

  const removeProduct = (pdt)=>{
    const exist = cart.find((x)=>{
      return x.id === pdt.id
    })
    if(exist.qty > 0)
    {
      setcart(cart.filter((products)=>{
        return products.id !== pdt.id
      }))
    }
  }

  return (
    <>
    <section className='cart-sectcion'>
      <div className='cart-id'>
          <h3>Cart < MdOutlineShoppingCart/></h3>
      </div>
      {
        cart.length === 0 &&
      <>
        <div className='cart-container'>
            <div className='empty-details'>
              <h3>Your Shopping cart is empty</h3>
              <button className='empty-btn'><Link to="/shop">Shop Now</Link></button>
            </div>
            <div className='empty'>
              <img src="http://localhost:3000//img/empty.webp" alt="empty" />
            </div>
        </div>
      </>
      }
      <div className='shoping-cart-container'>
        <div className='cart-left'>
          {cart.map((products , index)=>{
            return(
              <>              
                <div className='cart-box' id='shopc-box'>
                  <div className='cart-img' id='shopc-img'>
                    <img src={products.img} alt='' key={index} />
                  </div>
                  <div className='cart-details' id='shopc-details'>
                    <h4>{products.cat}</h4>
                    <h3>{products.name}</h3>
                    <p>Price: ₹{products.price}</p>
                    <div className='cart-quantity'>
                      <button onClick={()=>decqty(products)} >-</button>
                      <input type='number' value={products.qty} disabled />
                      <button onClick={()=>incqty(products)}>+</button>
                      <p className='remove-product' onClick={()=>removeProduct(products)} ><RiDeleteBin6Line /> Remove</p>
                    </div>
                    <p id='total-value'>Total: ₹{products.price*products.qty}</p>
                  </div>
                </div>                  
              </>
              )
            })
            }
          </div>
          {
        cart.length > 0 &&
        <>
          <div className='cart-right'>
            <div className='right-container'>
              <h3>price details</h3>
              <div>
                <h4>Price ({qnty} item)</h4>
                <h4 >₹{price}</h4>
              </div>
              <div>
                <h4>discount </h4>
                <h4 className='charges' >- ₹{disc}</h4>
              </div>
              <div>
                <h4>Platform Fee </h4>
                <h4>₹5</h4>
              </div>
              <div>
                <h4>Delivary Charges</h4>                  
                <h4 className='charges'> <del>₹80</del> Free</h4>
              </div>              
              <div className='cart-total'>
                <h6 >Total Amount</h6>
                <h6>₹{total}</h6>
              </div>
              <div>
                <h5>You will save ₹{disc+80}</h5>                       
              </div>
            </div>
            <div className='place-order'>
              <button>Place Order</button>
            </div>
          </div>  
          </>
        }
        </div>                                  
    </section>

    </>
  )
}

export default Cart;