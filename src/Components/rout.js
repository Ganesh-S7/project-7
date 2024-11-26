import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './home.js';
import Shop from './shop.js';
import Cart from './cart.js';
import Contact from './contact.js';
import Wishlist from './wishlist.js';
import Collection from './collection.js';


const Rout = ({Products ,categoriesFilter , trending ,filtercato ,tnd , addtocart, cart , setcart, addtolist, list ,detailspage, closePage, showDetails, details, setList}) =>{
    return(
        <>
        <Routes>
            <Route path='/project-7' element={<Home Products={Products}  tnd={tnd} filtercato={filtercato} addtocart={addtocart} detailspage={detailspage} closePage={closePage} showDetails={showDetails} details={details} addtolist={addtolist} />}/>
            <Route path='/project-7/cart' element={<Cart cart={cart} setcart={setcart} />} />
            <Route path='/project-7/shop' element={<Shop Products={Products} categoriesFilter={categoriesFilter} addtocart={addtocart} trending={trending} addtolist={addtolist} detailspage={detailspage} closePage={closePage} showDetails={showDetails} details={details} />}/>
            <Route path='/project-7/collection' element={<Collection addtolist={addtolist} addtocart={addtocart} detailspage={detailspage} details={details} showDetails={showDetails} closePage={closePage} />} />
            <Route path='/project-7/wishlist' element={<Wishlist list={list} setList={setList} addtocart={addtocart} />} />
            <Route path='/project-7/contact' element={<Contact categoriesFilter={categoriesFilter} showDetails={showDetails} closePage={closePage} />} />
        </Routes>
        </>
    )
};

export default Rout;