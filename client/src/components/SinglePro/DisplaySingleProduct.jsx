import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import Quantity from '../../utils/Quantity';
import { useContext, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { AppContext } from "../../App";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
const DisplaySingleProduct = ({elem}) => {
    const {handleAddtoCart,handleRemoveFromCart,addToWishlist,removeFromWishlist}=useContext(AppContext);
    const [count,setCount]=useState(0);
    // console.log(elem);
    const {productDesc,productTitle,productPrice}=elem?.attributes;
    const {url}=elem?.attributes?.productImg?.data[0]?.attributes;
    const {id}=elem.attributes?.categories?.data[0];
    const {categoryTitle}=elem.attributes?.categories?.data[0]?.attributes;
    const catName=categoryTitle.replace('-',' ');

    return (<div className='mb-16'>
    <div className="mb-16 flex w-full gap-16">
    <div className='py-4 px-4 bg-neutral-100 rounded-sm w-2/5'>
        <img src={import.meta.env.VITE_DEV_URL + url} className='object-cover mb-4  cursor-pointer hover:scale-110'/>
    </div>

    <div className='w-3/5 flex flex-col gap-2'>
        <h1 className='font-semibold text-3xl text-zinc-800'>{productTitle}</h1>
        <h3 className='text-xl font-medium text-zinc-800'>₹ {productPrice}</h3>
        <button className="text-red-600" onClick={()=>{
            console.log('clicked');
            console.log(elem);
            if(elem?.attributes?.wish){
                removeFromWishlist(elem);
            }
            else{
                addToWishlist(elem);
            }
            
            // addToWishlist(elem);
        }}>{elem?.attributes?.wish?<FaHeart/>:<FaRegHeart/>}</button>

        <p className='text-md font-normal text-zinc-700 mb-6'>{productDesc}</p>

        <div className='flex'>
            {elem.attributes.quantity>0?
                <div className='flex gap-4 border-2 border-gray-200 rounded-sm w-[30%] justify-center'>
                <button className='border-r-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
                    handleRemoveFromCart(elem);
                }}><RiSubtractLine/></button>
                <h2 className='py-2 font-semibold'>{elem.attributes.quantity}</h2>
                <button className='border-l-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
                    handleAddtoCart(elem);
                }}><IoMdAdd/></button>
            </div>
                :
                <button className='ml-8 px-4 py-2 bg-purple-600 rounded-sm font-medium text-lg hover:bg-purple-700 text-white duration-200 flex items-center gap-2' onClick={()=>{
                    handleAddtoCart(elem);
                }}><FaCartPlus/> Add to Cart</button>
            }
            
            
        </div>

        <div className="flex gap-2 items-center">
            <h2 className="text-lg font-medium text-zinc-800">Category:</h2>
            <p className="text-md font-normal text-zinc-700">{catName}</p>
        </div>
    </div>
    </div>
    <RelatedProducts catId={id} prodId={elem.id}/>
    </div>)
}

export default DisplaySingleProduct