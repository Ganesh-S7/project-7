import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './home.js';
import Shop from './shop.js';
import Cart from './cart.js';
import Contact from './contact.js';
import Wishlist from './wishlist.js';


const Rout = ({Products ,categoriesFilter , trending ,filtercato ,tnd , addtocart, cart , setcart, addtolist, list ,detailspage, closePage, showDetails, details, setList}) =>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home Products={Products}  tnd={tnd} filtercato={filtercato} addtocart={addtocart} detailspage={detailspage} closePage={closePage} showDetails={showDetails} details={details} addtolist={addtolist} />}/>
            <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />} />
            <Route path='/shop' element={<Shop Products={Products} categoriesFilter={categoriesFilter} addtocart={addtocart} trending={trending} addtolist={addtolist} detailspage={detailspage} closePage={closePage} showDetails={showDetails} details={details} />}/>
            <Route path='/wishlist' element={<Wishlist list={list} setList={setList} addtocart={addtocart} />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </>
    )
};

export default Rout;