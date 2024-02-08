import React from 'react'
import DisplayProducts from './DisplayProducts';
import { Link } from 'react-router-dom';
const Products = ({products}) => {
    if(!products){
        return <h1 className='h-screen bg-violet-900'>loading</h1>
    }
return (
    <div className='flex justify-center pt-16'>
    <div className='w-[70vw]'>
        <h1 className='text-5xl font-bold mb-8'>Popular Products</h1>
        <div className='grid grid-cols-4 gap-8'>
        {products.data.map((elem)=>{
            // console.log(elem)
            return <Link to={`/products/${elem.id}`} key={elem.id}>
                <DisplayProducts elem={elem} />
            </Link>
        })}
        </div>
    </div>
    </div>
)
}

export default Products