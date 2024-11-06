import React from 'react';
import { FaPiggyBank, FaWallet  } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import './footer.css';

const Footer = () => {
  return (
    <>
    <footer>
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='perk'>
                    <div className='perk-icon'>
                        < FaPiggyBank />
                    </div>
                    <div className='perk-info'>
                        <h4>Great savings</h4>
                        <h6>Enjoy unbeatable discounts and special offers on a wide range of products.</h6>
                    </div>
                </div>            
                <div className='perk'>
                    <div className='perk-icon'>
                        < FaShippingFast />
                    </div>
                    <div className='perk-info'>
                        <h4>Free Delivery</h4>
                        <h6>Get your orders delivered to your doorstep at no extra cost.</h6>
                    </div>
                </div>            
                <div className='perk'>
                    <div className='perk-icon'>
                        < RiCustomerService2Fill />
                    </div>
                    <div className='perk-info'>
                        <h4>24x7 Support:</h4>
                        <h6>Our customer service team is available around the clock to assist you.</h6>
                    </div>
                </div>            
                <div className='perk'>
                    <div className='perk-icon'>
                        < FaWallet />
                    </div>
                    <div className='perk-info'>
                        <h4>Money Back</h4>
                        <h6>Shop with confidence with our hassle-free money-back guarantee.</h6>
                    </div>
                </div>            
            </div>
            <div className='footer-right'>
                <div className='footer-head'>
                    <div className='footer-logo'>
                        <img src='http://localhost:3000//img/logo.png' alt='logo' />
                    </div>                   
                </div>
                <div className='site-map'>
                    <div className='map-box'>
                        <div className='map-head'>
                            <h4>YOUR ACCOUNT</h4>
                        </div>
                        <ul className='map-items'>
                            <li>Abous Us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='map-box'>
                        <div className='map-head'>
                            <h4>PRODUCTS</h4>
                        </div>
                        <ul className='map-items'>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Products</li>
                            <li>Old Products</li>
                        </ul>
                    </div>
                    <div className='map-box'>
                        <div className='map-head'>
                            <h4>CONTACT US</h4>
                        </div>
                        <div className='map-items'>
                            <spam>305, Bengaluru Karnataka</spam>
                            <p>+91 9873456780</p>
                            <a className='mail' href='mailto:happyshop@gmail.com'>happyshop@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
    </>
  );
};

export default Footer;
