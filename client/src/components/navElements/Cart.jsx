import { useContext } from "react"
import { AppContext } from "../../App"
import DisplayCart from "./DisplayCart";

const Cart = () => {
    const {cartItems,cartQuantity,cartTotal,handleClearCart}=useContext(AppContext);
    // console.log(cartItems);
    return (
    <div className="min-h-screen flex justify-center py-20">
    <div className='w-[60vw]'>
        
        <div className="flex justify-between items-center">
        <h1 className='text-5xl font-bold mb-8'>{`Cart (${cartQuantity} ${cartQuantity>1?'items':'item'})`}</h1>
            <button className=' px-4 py-2 bg-violet-400 rounded-sm font-medium text-lg hover:bg-violet-600 text-white duration-200 flex items-center gap-2 mb-8' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>
            </div>
        
        <DisplayCart products={cartItems} />

        <div className="flex flex-col items-center gap-4 ">
        <div className="font-medium text-3xl">{`Price: ${cartTotal}`}</div>
        <button className='px-4 py-2 bg-violet-400 rounded-sm font-medium text-lg hover:bg-violet-600 text-white duration-200 flex items-center gap-2'>Proceed to Checkout</button>
        </div>
    </div>
    </div>
    )
}

export default Cart