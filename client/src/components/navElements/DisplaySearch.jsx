
const DisplaySearch = ({items,query}) => {
    if(!query.length){
        return <h1 className="font-semibold text-2xl">Search Something</h1>
    }
    else if(!items){
        return <h1 className="font-semibold text-2xl">LOADING..</h1>
    }
    else if(!items.data.length){
        return <h1 className="font-semibold text-2xl">No Products Found</h1>
    }
    return (
    <ul className="h-[70vh] overflow-y-auto ">
    {items.data.map((elem)=>{
        const {productTitle,productDesc}=elem.attributes;
        const {url}=elem.attributes.productImg.data[0].attributes;
        return (
        <li  className='flex border-b-2 border-gray-300 gap-4 mb-4' key={elem.id}>
            <div className='bg-neutral-200 rounded-sm '>
            <img src={import.meta.env.VITE_DEV_URL + url} className='object-cover mb-4  cursor-pointer hover:scale-110 ' />
            </div>
            <div className="w-[87%]">
            <h1 className='font-medium text-lg text-ellipsis overflow-hidden whitespace-nowrap'>{productTitle}</h1>
            <p className='text-md font-medium text-ellipsis overflow-hidden whitespace-nowrap'>{productDesc}</p>

            </div>
        </li> 
        )
    })}
    </ul>
    )
}

export default DisplaySearch