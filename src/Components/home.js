import React, { lazy , useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import  './styles/home.css';
// import Homeproducts from "./home_products";
import { GoHeartFill } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";
import { FaFacebook, FaTelegram,  FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Home = ({ Products , tnd , filtercato, addtocart, detailspage, closePage, showDetails, details, addtolist })=>{



    useEffect(()=>{
        tnd()
    },[])

    return(
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
        <Carousel infiniteLoop={true}  interval={2500} autoPlay={true} stopOnHover={false} emulateTouch={true} centerMode={true} centerSlidePercentage={90}>
                <div>
                    <img src="../project-7/img//slider4.jpeg" alt='pro'/>
                </div>
                <div>
                    <img src="../project-7/img//slider1.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="../project-7/img//slider2.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="../project-7/img//slider3.jpg" alt='pro'/>
                </div>                               
                <div>
                    <img src="../project-7/img//slider5.jpeg" alt='pro'/>
                </div>               
            </Carousel>
            <section className="products-section">
                <div className="products-header">
                    <div className="heading">
                        <h2 onClick={()=>tnd()}>Trending products</h2>
                    </div>
                    <div className="cate">
                        <h3 onClick={()=>filtercato('new')}>New</h3>
                        <h3 onClick={()=>filtercato('featured')}>Featured</h3>
                        <h3 onClick={()=>filtercato('top')}>Top Selling</h3>
                    </div>
                </div>
                <div className="products">
                    <div className="container">
                        {Products.map((product, index)=>  {
                            return (
                                <>
                                    <div className="box"  key={index}>
                                        <div className="box-img">
                                            <img src={product.img} alt="products_image" loading={lazy}/>
                                            <div className="box-icon">
                                                <div className="icon" onClick={()=>addtolist(product)}>
                                                    <GoHeartFill />
                                                </div>
                                                <div className="icon" onClick={()=>detailspage(product)}>
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
                                            <button onClick={()=>addtocart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="banners-section">
                <div className="banner-container">
                    <div className="banner-left">
                        <img className="banner-up" src="../project-7/img//banner5.jpg" alt="banner"/>
                        <img className="banner-down" src="../project-7/img//banner1.jpg" alt="banner"/>
                    </div>
                    <div className="banner-right">
                        <img src="../project-7/img//banner2.jpg" alt="banner"/>
                        <img  src="../project-7/img//banner4.jpg" alt="banner"/>
                        <img className="big-banner" src="../project-7/img//banner3.jpg" alt="banner"/>
                    </div>
                </div>
            </section>
            <section className="newsletter-section">
                <div className="newsletter-container">
                        <div className="news-header">
                            <h2>Hurry up! Subscribe our newsletter and get extra 25% Off</h2>
                            <h3>Limited time offer for this month. No credit card required.</h3>
                        </div>
                        <div className="email-form">
                            <input type="text" placeholder="E-mail" />
                            <button type="submit">subscribe</button>
                        </div>
                        <div className="medias">
                            <p className="fb"><FaFacebook/></p>
                            <p className="ig"><AiFillInstagram /></p>
                            <p className="tw"><FaSquareXTwitter/></p>
                            <p className="yt"><FaYoutube/></p>
                            <p className="tg"><FaTelegram/></p>
                        </div>    
                </div> 
            </section>
        </>
    )
};

export default Home;