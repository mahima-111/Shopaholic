import { Link } from 'react-router-dom';

const CategoryBanner = ({categories}) => {
return (
    <div className='flex justify-center pt-16'>
    <div className='w-[80vw]'>
        <div className='flex gap-4 justify-center'>

        {categories && categories?.data?.map((elem)=>{
        const {url}=elem.attributes.categoryImg.data.attributes;
        const {id}=elem;
        
        return <div key={elem.id}>
            <Link to={`category/${id}`}>
                <div className='overflow-hidden'>
                <img src={import.meta.env.VITE_DEV_URL + url} className='hover:scale-125 '/>
                </div>
            </Link>
        </div>
        })}
        </div>
    </div>
    </div>
)
}

export default CategoryBanner