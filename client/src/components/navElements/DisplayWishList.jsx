import { useContext } from "react"
import { AppContext } from "../../App"
import { FaCartPlus } from "react-icons/fa6";
const DisplayWishList = ({products}) => {
    const {handleAddtoCart,removeFromWishlist}=useContext(AppContext);
    // console.log(products);
    if(products.length===0){
        return <div>
            <h1 className='text-5xl font-semibold text-center text-black pt-32 h-80'>nothing in wishlist.</h1>
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
        <div className='flex'>
            <button className='ml-8 px-4 py-2 bg-purple-600 rounded-sm font-medium text-lg hover:bg-purple-700 text-white duration-200 flex items-center gap-2' onClick={()=>{
                handleAddtoCart(elem);
                removeFromWishlist(elem);
            }}><FaCartPlus/> Add to Cart</button>
        </div>
    </div>
    </div>
    })}
    </div>
    )
}

export default DisplayWishList