import { useContext } from 'react';
import {AppContext} from '../../App';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import DisplaySingleProduct from './DisplaySingleProduct';

const SingleProduct = () => {
    let navigate=useNavigate();
    const {productId}=useParams();
    const {products}=useContext(AppContext);
return (
<div className='pt-28 flex justify-center'>
    <div className='w-[70vw]'>
        {products && products.data.filter((elem)=>{
        return productId==elem.id;
        }).map((elem)=>{       
        return <DisplaySingleProduct elem={elem} key={elem.id}/>
        })}
    </div>
</div>
)
}

export default SingleProduct