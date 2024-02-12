import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./assets/App";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./assets/Component/Context/ShopContext";

 
 


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter> 
 <ShopContextProvider>
 <App/>
 </ShopContextProvider>
   
 
   
   
  </BrowserRouter>
  
 
 
  
    
  
  
    
)