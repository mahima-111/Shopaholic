import { useContext } from "react"
import { AppContext } from "../../App"
import DisplayWishList from "./DisplayWishList";

const WishList = () => {
    const {wishItems,wishQuantity}=useContext(AppContext);
    // console.log(wishItems);
    return (
    <div className="min-h-screen flex justify-center py-20">
    <div className='w-[60vw]'>
        <h1 className='text-5xl font-bold mb-8'>{`WishList (${wishQuantity} ${wishQuantity>1?'items':'item'})`}</h1>
        
        <DisplayWishList products={wishItems} />

    </div>
    </div>
    )
}

export default WishList