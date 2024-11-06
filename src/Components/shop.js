import React, { lazy, useEffect } from 'react'
import './shop.css';
import { GoHeartFill } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";

const Shop = ({ Products , trending , categoriesFilter }) => {

    console.log(Products);
    useEffect(()=>{
        trending()
    },[])

  return (
    <>
      <section className='shop'>
        <div className='shop-container'>
            <div className='shop-left'>
                <div className='shop-head'>
                    <h2>Home . Shop</h2>
                </div>
                <div className='poster1'>
                    <img src='http://localhost:3000//img/poster4.jpg' alt='poster'/>
                </div>
                <div className='shop-cato'>
                    <div className='cato-head'>
                        <h2>All Categories</h2>
                    </div>
                    <div className='cato-list'>
                        <ul>
                            <li onClick={()=>trending()}>All</li>
                            <li onClick={()=>categoriesFilter('laptop')}>LAPTOPS</li>
                            <li onClick={()=>categoriesFilter('watch')}>WATCHS</li>
                            <li onClick={()=>categoriesFilter('phone')}>PHONES</li>
                            <li onClick={()=>categoriesFilter('earphones')}>EARPHONES</li>
                            <li onClick={()=>categoriesFilter('shoes')}>SHOES</li>
                            <li onClick={()=>categoriesFilter('m_clothes')}>MEN CLOTHES</li>
                            <li onClick={()=>categoriesFilter('w_clothes')}>WOMEN CLOTHES</li>
                        </ul>
                    </div>
                </div>
                {/* <div className='poster1'>
                    <img src='http://localhost:3000//img/poster3.jpg' alt='poster'/>
                </div> */}
                <div className='poster3'>
                    <img src='http://localhost:3000//img/poster1.webp' alt='poster'/>
                </div>
            </div>
            <div className='shop-right'>
                <div className='poster2'>
                    <img src='http://localhost:3000//img/poster2.png' alt='poster'/>
                </div>
                <div className='shop-products'>
                    <h3 className='shop-title'>SHOP PRODUCTS</h3>
                    <div className="products">
                        <div className="container">
                            {Products.map((product, index)=>  {
                                return (
                                    <>
                                        <div className="box"  key={index}>
                                            <div className="box-img">
                                                <img src={product.img} alt="products_image" loading={lazy}/>
                                                <div className="box-icon">
                                                    <div className="icon">
                                                        <GoHeartFill />
                                                    </div>
                                                    <div className="icon">
                                                        <MdRemoveRedEye />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-title">
                                                <p>{product.name}</p>                                           
                                            </div>
                                            <div className="price-list">
                                                <p className="rs">₹</p>
                                                <h3 className="price">{product.price}</h3>
                                                <del className="disc">{product.discount}</del>
                                            </div>
                                            <div className="add">
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Shop