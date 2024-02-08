import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import DisplaySearch from './DisplaySearch';
import { fetchFromApi } from '../../utils/api';

const Search = ({setSearch}) => {
    const [query,setQuery]=useState("");
    const [result,setResult]=useState(null);
    return (
    <div className='h-screen flex justify-center bg-white text-black fixed w-full top-0 left-0 z-30'>
        <div className='w-[70vw] flex flex-col'>
            <div className='mb-6'>
            <input
                onChange={(e)=>{
                    setQuery(e.target.value)
                    // console.log(query);
                    fetchFromApi(`/api/products?populate=*&filters[productTitle][$containsi]=${query}`).then((res)=>{
                        setResult(res);
                    });
                    // console.log(result);
                }}
                value={query}
                autoFocus
                placeholder='SEARCH FOR PRODUCTS'
                className='text-3xl font-semibold outline-none px-4 py-2 border-b-2 border-black w-[95%] text-center'
            />
            <button className='text-gray-600' onClick={()=>{
                setQuery("");
            }}><IoCloseSharp size={25}/></button>
            <button onClick={()=>{setSearch(false)}}className='absolute top-4 right-10'><IoCloseSharp size={35}/></button>
            </div>
            <div>
                <DisplaySearch items={result} query={query}/>
            </div>
        </div>
    </div>
    )
}

export default Search