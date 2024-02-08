import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {AppContext} from '../../App';
import DisplayProducts from '../home/DisplayProducts';

const Category = () => {
    const {categoryId}=useParams();
    const {products}=useContext(AppContext);

    const categoryNames={
        1: "Headphones",
        2: "Bluetooth Speakers",
        3: "Wireless Earbuds",
        4: "Smart Watches",
    }
    
    if(!products){
        return <h1 className='h-screen bg-violet-700'>loading</h1>
    }

    return (
    <div className='flex justify-center pt-16 pb-8'>
    <div className='w-[70vw]'>

        <h1 className='text-5xl font-bold my-8'>{categoryNames[categoryId]}</h1>
        <div className='grid grid-cols-4 gap-8'>

        {products.data.filter((elem)=>{
        const {id}=elem.attributes.categories.data[0];
        return categoryId==id;
        }).map((elem)=>{
        return <Link to={`/category/${categoryId}/${elem.id}`} key={elem.id}>
            <DisplayProducts elem={elem} />
        </Link>
        })}
        
        </div>  
        </div>  
    </div>
)}

export default Category