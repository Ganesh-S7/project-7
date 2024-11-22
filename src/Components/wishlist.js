import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './styles/wishlist.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const Wishlist = ({ list, setList, addtocart }) => {

    const removeProduct = (pdt)=>{
        const exist = list.find((x)=>{
          return x.id === pdt.id
        })
        if(exist.qty > 0)
        {
          setList(list.filter((products)=>{
            return products.id !== pdt.id
          }))
        }
      }

      const moveTo =(products) =>{
        addtocart(products)
        removeProduct(products)
      };
  
  return (
        <>
        <section className='wishlist-section'>
            <div className='cart-id'>
                <h3>Wishlist < FaRegHeart/></h3>
            </div>
            {
            list.length === 0 &&
            <>
            <div className='cart-container'>
                <div className='empty-details'>
                <h3>Your Wishlist is empty</h3>
                <button className='empty-btn'><Link to="/shop">Shop Now</Link></button>
                </div>
                <div className='empty'>
                <img src="http://localhost:3000//img/wishlist.png" alt="empty" />
                </div>
            </div>
            </>
            }
            {
              list.length >= 1 &&
              <>
            <div className='wishlist-container'>
                <div className='left-wish'>
                    <img src="http://localhost:3000//img/vertical.png" alt="poster" />
                </div>
                <div className='right-wish'>
                {list.map((products , index)=>{
                return(
                <>              
                <div className='cart-box'>
                  <div className='cart-img'>
                    <img src={products.img} alt='' key={index} />
                  </div>
                  <div className='cart-details'>
                    <h4>{products.cat}</h4>
                    <h3>{products.name}</h3>
                    <h5 className='wish-desc'>{products.description}</h5>
                    <div className='wish-footer'>
                        <p id='total-value'>Price: ₹{products.price}</p>   
                        <button className='wish-add' onClick={()=>moveTo(products)} >Move to cart</button>                         
                    </div>
                  </div>
                  <div className='bin' onClick={()=>removeProduct(products)}><RiDeleteBin6Line/></div>
                </div>                  
              </>
              )
            })
            }
                </div>
            </div>
            </>
            }
        </section>
        </>
  )
}

export default Wishlist