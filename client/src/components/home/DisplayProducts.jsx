const DisplayProducts = ({elem}) => {
    const {productTitle,productPrice}=elem.attributes;
    const {url}=elem.attributes.productImg.data[0].attributes;
    return (
    <div  className=''>
        <div className='py-6 px-3 bg-neutral-200 rounded-sm'>
        <img src={import.meta.env.VITE_DEV_URL + url} className='object-cover mb-4  cursor-pointer hover:scale-110' />
        </div>
        <h1 className='font-medium text-lg text-ellipsis overflow-hidden whitespace-nowrap'>{productTitle}</h1>
        <h3 className='text-md font-medium'>₹ {productPrice}</h3>
    </div> 
    )
}

export default DisplayProducts