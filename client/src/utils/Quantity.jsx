import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
const Quantity = ({count,setCount}) => {
return (
    <div className='flex gap-4 border-2 border-gray-200 rounded-sm w-[30%] justify-center'>
        <button className='border-r-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
            count && setCount(--count);
        }}><RiSubtractLine/></button>
        <h2 className='py-2 font-semibold'>{count}</h2>
        <button className='border-l-2 border-gray-200 px-4 py-2 hover:bg-violet-300' onClick={()=>{
            setCount(++count);
        }}><IoMdAdd/></button>
    </div>
)
}

export default Quantity