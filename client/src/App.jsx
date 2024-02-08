import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import { createContext,useState } from 'react';
import { fetchFromApi } from './utils/api';
export const AppContext=createContext();
const App = () => {  
  const [categories,setCategories]=useState(null);
  const [products,setProducts]=useState(null);
  
  const [cartItems,setCartItems]=useState([]);
  const [cartQuantity,setCartQuantity]=useState(0);
  const [cartTotal,setCartTotal]=useState(0);

  const [wishItems,setWishItems]=useState([]);
  const [wishQuantity,setWishQuantity]=useState(0);

  const getCategories= ()=>{
    fetchFromApi("/api/categories?populate=*").then((res)=>{
        setCategories(res);
    }); 
  }
  const getProducts= ()=>{
      fetchFromApi("/api/products?populate=*").then((res)=>{
          setProducts(res);
      });   
  }  

  const handleAddtoCart=(item,quan=1)=>{
    let items=[...cartItems];
    let index=items.findIndex((p)=>{
      return p.id==item.id;
    });
    if(index!==-1){
      items[index].attributes.quantity += quan;
    }
    else{
      item.attributes.quantity= quan;
      items=[...items,item];
    }
    const cost=item.attributes.productPrice;
    const totalCost=cost*quan;
    setCartQuantity(cartQuantity+quan);
    setCartItems(items);
    setCartTotal(cartTotal+totalCost);
  }

  const handleRemoveFromCart=(item)=>{
    let items=[...cartItems];
    let index=items.findIndex((p)=>{
      return p.id==item.id;
    });
    if(index===-1){
      return;
    }
    else if(items[index].attributes.quantity===1){
      const cost=item.attributes.productPrice;
      item.attributes.quantity =0;
      setCartTotal(cartTotal-cost);
      items.splice(index,1);
    }
    else{
      item.attributes.quantity -=1;
      const cost=item.attributes.productPrice;
      setCartTotal(cartTotal-cost);
    }
    setCartQuantity(cartQuantity-1);
    setCartItems(items);
  }

  const handleClearCart=()=>{
    setCartQuantity(0);
    setCartItems([]);
    setCartTotal(0);
  }

  const addToWishlist=(item)=>{
    let items=[...wishItems];
    let index=items.findIndex((p)=>{
      return p.id==item.id;
    });
    if(index!==-1){
      return;
    }
    else{
      item.attributes.wish=true;
      items=[...items,item];
      setWishItems(items);
      setWishQuantity(wishQuantity+1);
    }
  }

  const removeFromWishlist=(item)=>{
    let items=[...wishItems];
    let index=items.findIndex((p)=>{
      return p.id==item.id;
    });
    if(index===-1){
      return;
    }
    else{
      item.attributes.wish=false;
      items.splice(index,1);
      setWishItems(items);
      setWishQuantity(wishQuantity-1);
    }
  }

  useEffect(()=>{
    getCategories();
    getProducts();
  },[]);

  return (
    <div>
      <AppContext.Provider value={{categories,setCategories,products,setProducts,cartItems,cartQuantity,cartTotal,handleAddtoCart,handleRemoveFromCart,handleClearCart,wishItems,wishQuantity,addToWishlist,removeFromWishlist}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </AppContext.Provider>
    </div>
  )
}

export default App