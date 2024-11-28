import React from "react";
import './styles/nav.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLogIn , FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";


function Nav( {Search , setSearch , searchProducts}){

  
    const { loginWithRedirect , logout , user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (
            <section id="load">
                <div className="dots-container" >
                    <div id="dot"></div>
                    <div id="dot"></div>
                    <div id="dot"></div>
                    <div id="dot"></div>
                    <div id="dot"></div>
                </div>
        </section>
        ); 
    }
    const handleLogout = () => {
        logout({
          returnTo: 'https://ganesh-s7.github.io/project-7/'  
        });
      };
      console.log(Search)
    return(
        <>
        <header>
            <div className="nav-right">
                <img className="logo" src='../project-7/img//logo.png' alt="logo"/>
            </div>
            <div className="nav-left">
                <div className="search">
                    <input className="search-bar" type="text" placeholder="Search" value={Search} onChange={(e)=> setSearch(e.target.value)}/>
                    <div className="search-btn" onClick={searchProducts}><FiSearch /></div>
                </div>
                {/* <div className="cart"><MdOutlineShoppingCart /></div> */}
                <div className="cart"><Link to ='project-7/cart'><MdOutlineShoppingCart /></Link></div>
                {
                    isAuthenticated ?
                
                    <div className="login" onClick={handleLogout}><FiLogOut />Logout</div>
                    :
                    <div className="login" onClick={() => loginWithRedirect()}><FiLogIn />Login</div>
                }
                { isAuthenticated ?
                <div className="user"> <img className='user-pic' src={user.picture} alt="user"/>profile</div>
                :
                <div className="user"><FaUserAlt />profile</div>
                }
            </div>
        </header>
        <nav>
            <div className="nav-bar">

                <div className="nav-contain">
                {
                isAuthenticated?
                <> 
                <div className="username">
                    <p>Hello!<br/></p>
                    {user.name}
                </div>
                </>:
                null
                }
                <ul className="main-nav">
                    <li><Link to ='project-7/' className="nav-item">Home</Link></li>
                    <li><Link to ='project-7/shop' className="nav-item">Shop</Link></li>
                    <li><Link to ='project-7/collection' className="nav-item">Collection</Link></li>
                    <li><Link to ='project-7/wishlist' className="nav-item">Wishlist</Link></li>
                    <li><Link to ='project-7/contact' className="nav-item">Contact</Link></li>
                </ul>
                </div>
            </div>
            <div className="offer">
                <p>flat 25% over all products</p>
            </div>
        </nav> 
        </>
    );
}

export default Nav;