import React, { lazy, useState , useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import  './home.css';
import Homeproducts from "./home_products";
import { GoHeartFill } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";

const Home = ()=>{
    const [trendingProducts , settrendingProducts] = useState(Homeproducts);

    const filtercato = (x) => {
        
        const filterProducts = Homeproducts.filter((products)=>{
            return products.type === x;
        });
        settrendingProducts(filterProducts)
    };

    const trending = ()=>{
        const filterTrending = Homeproducts.filter((product)=>{
            return product.tnd === 'yes';
        });
        settrendingProducts(filterTrending)
    };

    useEffect(()=>{
        trending()
    },[])

    return(
        <>
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} centerMode={true} centerSlidePercentage={90}>
                <div>
                    <img src="http://localhost:3000//img/slider1.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="http://localhost:3000//img/slider2.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="http://localhost:3000//img/slider3.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="http://localhost:3000//img/slider4.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="http://localhost:3000//img/slider5.jpg" alt='pro'/>
                </div>        
                <div>
                    <img src="http://localhost:3000//img/slider6.jpg" alt='pro'/>
                </div>        
            </Carousel>
            <section className="products-section">
                <div className="products-header">
                    <div className="heading">
                        <h2 onClick={()=>trending()}>Trending products</h2>
                    </div>
                    <div className="cate">
                        <h3 onClick={()=>filtercato('new')}>New</h3>
                        <h3 onClick={()=>filtercato('featured')}>Featured</h3>
                        <h3 onClick={()=>filtercato('top')}>Top Selling</h3>
                    </div>
                </div>
                <div className="products">
                    <div className="container">
                        {trendingProducts.map((product, index)=>  {
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
            </section>
        </>
    )
};

export default Home;