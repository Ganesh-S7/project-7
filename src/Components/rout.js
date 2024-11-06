import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './home.js';
import Shop from './shop.js'


const Rout = ({Products ,categoriesFilter , trending ,filtercato ,tnd}) =>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home Products={Products}  tnd={tnd} filtercato={filtercato} />}/>
            <Route path='/shop' element={<Shop Products={Products} categoriesFilter={categoriesFilter} trending={trending} />}/>
        </Routes>
        </>
    )
};

export default Rout;