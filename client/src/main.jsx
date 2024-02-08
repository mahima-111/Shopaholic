import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/navElements/About.jsx';
import Contact from './components/navElements/Contact.jsx';
import Home from './components/home/Home.jsx';
import SingleProduct from './components/singlePro/SingleProduct.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Category from './components/navElements/Category.jsx';
import Cart from './components/navElements/Cart.jsx';
import WishList from './components/navElements/WishList.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/category/:categoryId',
        element:<Category/>
      },
      {
        path:'/products/:productId',
        element: <SingleProduct/>
      },
      {
        path:'/category/:categoryId/:productId',
        element: <SingleProduct/>
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path:'/wishlist',
        element: <WishList/>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
