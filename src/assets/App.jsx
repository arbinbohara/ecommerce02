import React from 'react'
import "../assets/main.scss";
import Header from "./Component/Header";
import Footer from "./Component/Footer/Footer"

import { Routes, Route } from 'react-router-dom';
import Shop from './Component/Page/Shop';
import ShopCategory from './Component/Page/ShopCategory';
import Product from './Component/Page/Product';
import Cart from './Component/Page/Cart';
import Login from './Component/Page/Login';

import men_banner from './Gallery/banner_mens.png';
import women_banner from './Gallery/banner_women.png';
import kid_banner from './Gallery/banner_kids.png';




function App() {
  return ( 
<>
<Header/>
<Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
<Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
<Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/product/:productId' element={<Product/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
</Routes>
<Footer/>
</>
)
}
export default App




