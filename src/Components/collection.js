import React, { useRef } from 'react';
import './styles/collection.css';
import Homeproducts from './home_products';
import { GoHeartFill } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Collection = ({ addtolist, detailspage, details, addtocart, showDetails, closePage }) => {
    const phoneRef = useRef(null);
    const laptopsRef = useRef(null);
    const watchRef = useRef(null);
    const earphonesRef = useRef(null);
    const shoesRef = useRef(null);
    const mClothesRef = useRef(null);
    const wClothesRef = useRef(null);

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    const phone = Homeproducts.filter((products) => products.cat === 'phone');
    const laptops = Homeproducts.filter((products) => products.cat === 'laptop');
    const watch = Homeproducts.filter((products) => products.cat === 'watch');
    const earphones = Homeproducts.filter((products) => products.cat === 'earphones');
    const shoes = Homeproducts.filter((products) => products.cat === 'shoes');
    const m_clothes = Homeproducts.filter((products) => products.cat === 'm_clothes');
    const w_clothes = Homeproducts.filter((products) => products.cat === 'w_clothes');

    return (
        <>
        {
        showDetails?
        <>
       <div className="details-wrapper">
        <div className='product-details'>
            <div onClick={()=>closePage()}><IoClose /></div>
            <div className='product-details-container'>
                <div className='details-img'>
                    <img src={details.img} alt='products_img' />
                </div>
                <div className='products-info'>
                    <h4>{details.cat}</h4>
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <div>
                        <h5>₹{details.price}</h5>
                        <del>₹{details.discount}</del>                    
                    </div>
                    <button onClick={()=>addtocart(details)} className='add-cart'>Add to cart</button>
                    <button onClick={()=>addtolist(details)} className='add-wish'>Add to Wishlist</button>
                </div>
            </div>
        </div>
        </div>
        </>
        :null
    }
            <section className='collection-section'>
                <div className='cart-id'>
                    <h3>Collection</h3>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Smartphones</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={phoneRef}>
                            <div className="collection-products">
                                {phone.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(phoneRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(phoneRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Laptops</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={laptopsRef}>
                            <div className="collection-products">
                                {laptops.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(laptopsRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(laptopsRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Smartwatches</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={watchRef}>
                            <div className="collection-products">
                                {watch.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(watchRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(watchRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Earphones</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={earphonesRef}>
                            <div className="collection-products">
                                {earphones.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(earphonesRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(earphonesRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Shoes</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={shoesRef}>
                            <div className="collection-products">
                                {shoes.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(shoesRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(shoesRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Mens Wear</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={mClothesRef}>
                            <div className="collection-products">
                                {m_clothes.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(mClothesRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(mClothesRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>

                <div className='collection-row'>
                    <h3 className='row-title'>Womens Wear</h3>
                    <div className="collection-container-wrapper">
                        <div className="collection-container" ref={wClothesRef}>
                            <div className="collection-products">
                                {w_clothes.map((product, index) => (
                                    <div className="box" key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading="lazy" />
                                            <div className="box-icon">
                                                <div className="icon" onClick={() => addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={() => detailspage(product)}>
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
                                            <button onClick={() => addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="scroll-button left" onClick={() => scrollLeft(wClothesRef)}><FaAngleDoubleLeft /></button>
                        <button className="scroll-button right" onClick={() => scrollRight(wClothesRef)}><FaAngleDoubleRight /></button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Collection;
