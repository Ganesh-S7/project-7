import React from "react";
import './nav.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogIn , FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";


function Nav(){
    const { loginWithRedirect , logout , user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div className="load">Loading ...</div>;
      }
    return(
        <>
        <header>
            <div className="nav-right">
                <img className="logo" src='http://localhost:3000//img/logo.png' alt="logo"/>
            </div>
            <div className="nav-left">
                <div className="search">
                    <input className="search-bar" type="text" placeholder="Search"/>
                    <div className="search-btn"><FiSearch /></div>
                </div>
                <div className="cart"><MdOutlineShoppingCart /></div>
                {
                    isAuthenticated ?
                
                    <div className="login" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FiLogOut />Logout</div>
                    :
                    <div className="login" onClick={() => loginWithRedirect()}><FiLogIn />Login</div>
                }
                { isAuthenticated ?
                <div className="user"><img className='user-pic' src={user.picture} alt="user"/>{user.name}</div>
                :
                <div className="user"><FaUserAlt />profile</div>
                }
            </div>
        </header>
        <nav>
            <div className="nav-bar">
                <ul className="main-nav">
                    <li><Link to ='/' className="nav-item">Home</Link></li>
                    <li><Link to ='/shop' className="nav-item">Shop</Link></li>
                    <li><Link to ='/collection' className="nav-item">Collection</Link></li>
                    <li><Link to ='/about' className="nav-item">About</Link></li>
                    <li><Link to ='/contact' className="nav-item">Contact</Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>flat 40% over all products</p>
            </div>
        </nav> 
        </>
    );
}

export default Nav;