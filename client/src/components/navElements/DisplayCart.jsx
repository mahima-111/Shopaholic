import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { AppContext } from "../../App";
const DisplayCart = ({products}) => {
    const {handleAddtoCart,handleRemoveFromCart,addToWishlist}=useContext(AppContext);
    console.log(products);
    if(products.length===0){
        return <div>
            <h1 className='text-5xl font-semibold text-center text-black pt-32 h-80'>nothing in cart.</h1>
        </div>
    }
    return (
    <div className="overflow-y-auto h-80 overflow-x-hidden flex flex-col gap-4">
    {products.map((elem)=>{
        const {productTitle,productPrice}=elem.attributes;
        const {url}=elem.attributes.productImg.data[0].attributes;
    return <div className="flex justify-between" key={elem.id}>
    <div className='py-3 px-3 bg-neutral-200 rounded-sm w-[18%] aspect-square'>
        <img src={import.meta.env.VITE_DEV_URL + url} className='object-cover mb-4  cursor-pointer hover:scale-110' />
    </div>
    <div className="w-[70%] flex flex-col gap-4">
        <h1 className='font-medium text-xl text-ellipsis overflow-hidden whitespace-nowrap'>{productTitle}</h1>
        <h3 className='text-lg font-medium'>₹ {productPrice}</h3>
        <div className="flex gap-8">
        <div className='flex'>
            <div className='flex gap-4 border-2 border-gray-200 rounded-sm  justify-center'>
            <button className='border-r-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
                handleRemoveFromCart(elem);
            }}><RiSubtractLine/></button>
            <h2 className='py-2 font-semibold'>{elem.attributes.quantity}</h2>
            <button className='border-l-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
                handleAddtoCart(elem);
            }}><IoMdAdd/></button>
            </div>
        </div>
            <div>
            <button className=' px-4 py-2 bg-red-600/80 rounded-sm font-medium text-lg hover:bg-red-800 text-white duration-200 flex items-center gap-2' onClick={()=>{
                addToWishlist(elem);
                handleRemoveFromCart(elem);
            }}>Move to wishlist</button>
            </div>
        </div>
        
    </div>
    </div>
    })}
    </div>
    )
}

export default DisplayCart