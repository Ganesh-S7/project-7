import Nav from './Components/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './Components/rout';
import Footer from './Components/Footer';
import Homeproducts from './Components/home_products';
import React ,{ useState } from 'react';
import './Components/styles/responsive.css';

function App() {
  const [Products , SetProducts] = useState(Homeproducts);
  const [Search , setSearch] = useState('');
  const [ cart, setcart ] = useState([]);
  const [ list, setList ] = useState([]);
  const [showDetails , setshowDetails] = useState(false);
const [details , setDetails] = useState([]);

  //******* home filters *******//
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

  const searchLength = (Search || []).length === 0;

  //******* shop filters *******//
  
const categorySynonyms = {
  phone: ['phone', 'smartphone', 'mobile', 'cellphone'],
  laptop: ['laptop', 'notebook', 'macbook', 'pc'],
  watch: ['watch'],
  shoes: ['shoes', 'footwear', 'snicker'],
  earphones: ['earphone', 'earbuds', 'airpods', 'headphone', 'headset' ,'bluetooth'],
  w_clothes: [ 'women', 'dress', "fashion", 'clothe' ],
  m_clothes: [ 'men', 'hoodie', "fashion", 'clothe' ],
};

const searchProducts = () => {

  if (searchLength) {
    
      alert("Please search something");

  } else {

      const lowerCaseSearchTerm = Search.toLowerCase();

      let matchingCategories = [];

      for (let category in categorySynonyms) {
          
          const regex = new RegExp(categorySynonyms[category].join("|"), "i");
          if (regex.test(lowerCaseSearchTerm)) {
              matchingCategories.push(category); 
          }
      }

      if (matchingCategories.length > 0) {
          const searchFilter = Homeproducts.filter((product) => {
              return matchingCategories.includes(product.cat.toLowerCase());
          });
          SetProducts(searchFilter);
      } else {
          alert("Search not found!!!");
      }
  }
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



const detailspage = (product) => {
    const detailsData = ([{product}]);
    const productDetails = detailsData[0]['product']
    // console.log(productDetails);
    setDetails(productDetails)
    setshowDetails(true)
};

const closePage = () => {
    setshowDetails(false)
};



//*******  add to cart *******// 
const addtocart = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id;
  });
  if(exist){
    alert(`${product.name} is already in cart !!!`)
  }else{
    setcart([...cart, {...product, qty:1}])    
    alert(`${product.name} added to cart`)
  }
};
  // console.log(cart);

const addtolist = (product) =>{
  const exist = list.find((x)=>{
    return x.id === product.id;
  });
  if(exist){
    alert(`${product.name} is already in Wishlist !!!`)
  }else{
    setList([...list, {...product, qty:1}])    
    alert(`${product.name} added to Wishlist`)
  }
};
  // console.log(list);


  return (
    <>
    <BrowserRouter>
    <div className='app-container'>
      <Nav Search={Search}  setSearch={setSearch} searchProducts={searchProducts} />
      <Rout Products={Products} categoriesFilter={categoriesFilter} trending={trending} filtercato={filtercato} tnd={tnd} addtocart={addtocart} cart={cart} setcart={setcart} addtolist={addtolist} list={list} detailspage={detailspage} closePage={closePage} showDetails={showDetails} details={details} setList={setList} />
      <Footer/>
    </div>
      </BrowserRouter>
    </>
  );
}

export default App;
