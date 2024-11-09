import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './home.js';
import Shop from './shop.js';
import Cart from './cart.js';


const Rout = ({Products ,categoriesFilter , trending ,filtercato ,tnd , addtocart}) =>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home Products={Products}  tnd={tnd} filtercato={filtercato} addtocart={addtocart} />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop Products={Products} categoriesFilter={categoriesFilter} trending={trending} />}/>
        </Routes>
        </>
    )
};

export default Rout;