import Nav from './Components/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './Components/rout';
import Footer from './Components/Footer';
import Homeproducts from './Components/home_products';
import React ,{ useState } from 'react';

function App() {
  const [Products , SetProducts] = useState(Homeproducts);
  const [Search , setSearch] = useState('');

  const searchProducts = () =>{
    const searchFilter = Homeproducts.filter((products)=>{
        return products.cat === Search;
    });
    SetProducts(searchFilter)
  };

  const categoriesFilter = (x) =>{
    const filterProducts = Homeproducts.filter((products)=>{
        return products.cat === x;
    });
    SetProducts(filterProducts)
};

const trending = ()=>{
    const filterTrending = Homeproducts.filter((product)=>{
      return product.id % 3 === 0;
    });
    SetProducts(filterTrending)
};

//***************//
const filtercato = (x) => {
        
  const filterProducts = Homeproducts.filter((products)=>{
      return products.type === x;
  });
  SetProducts(filterProducts)
};

const tnd = ()=>{
  const filterTnd = Homeproducts.filter((product)=>{
      return product.tnd === 'yes';
  });
  SetProducts(filterTnd)
};

  return (
    <>
    <BrowserRouter>
      <Nav Search={Search}  setSearch={setSearch} searchProducts={searchProducts} />
      <Rout Products={Products} categoriesFilter={categoriesFilter} trending={trending} filtercato={filtercato} tnd={tnd} />
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
