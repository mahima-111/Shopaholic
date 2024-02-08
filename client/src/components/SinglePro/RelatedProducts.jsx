import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import DisplayProducts from "../home/DisplayProducts";
const RelatedProducts = ({catId,prodId}) => {
    const {products}=useContext(AppContext);
    if(!products){
        return <h1 className='h-screen bg-violet-900'>loading</h1>
    }
    return (
    <div className='flex justify-center pt-16'>
    <div className='w-[70vw]'>
        <h1 className='text-5xl font-bold mb-8'>Related Products</h1>
        <div className='grid grid-cols-4 gap-8'>
        {products.data.filter((elem)=>{
            const {id}=elem.attributes?.categories?.data[0];
            const productId=elem.id;
            return (catId==id && prodId!=productId);
        }).map((elem)=>{
            return <Link to={`/products/${elem.id}`} key={elem.id}>
                <DisplayProducts elem={elem} />
            </Link>
        })}
        </div>
    </div>
    </div>
)
}

export default RelatedProducts