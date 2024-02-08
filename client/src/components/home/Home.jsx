import React, { useEffect } from 'react'
import HomeBanner from './HomeBanner';
import NewsLetter from './NewsLetter';
import CategoryBanner from './CategoryBanner';
import { fetchFromApi } from '../../utils/api';
import { useContext } from 'react';
import {AppContext} from '../../App';
import Products from './Products';

const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(AppContext);
    
    
return (
    <div>
        <HomeBanner/>
        <CategoryBanner categories={categories}/>
        <Products products={products}/>
        <NewsLetter/>
    </div>
)
}

export default Home