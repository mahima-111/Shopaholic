import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    const categoryNames=[
        "Headphones",
        "Bluetooth Speakers",
        "Wireless Earbuds",
        "Smart Watches",
    ]
    const pages=[
        "Home","About","Privacy Policy","Returns","Terms & Conditions",
    ]
    return (
        <div className="pt-8 pb-12 bg-gray-800 text-center text-white flex justify-center sticky">
        <div className='w-[70vw]'>
        <div className="flex gap-4 justify-between">
        <div className="flex flex-col items-start justify-start gap-4 w-[40%]">
            <h3 className="text-2xl text-slate-300">Contact</h3>
            <ul className='text-lg text-gray-500 flex flex-col justify-start gap-2'>
                <li className="self-start flex gap-2 items-center">
                    <FaLocationArrow size={35}/> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem, ipsum dolor.
                </li>
                <li className="self-start flex gap-2 items-center">
                    <FaPhoneAlt/> 
                    Phone: +91-1234567798
                </li>
                <li className="self-start flex gap-2 items-center">
                    <MdOutlineMailOutline/> 
                    Shopaholic@gmail.com
                </li>

            </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 ">
            <h3 className="text-2xl text-slate-300">Categories</h3>
            <ul className='text-lg text-gray-500 flex flex-col justify-start gap-2'>
            {categoryNames.map((item,index)=>{
                return <li key={index} className="self-start">{item}</li>
            })}
            </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 ">
            <h3 className="text-2xl text-slate-300">Pages</h3>
            <ul className='text-lg text-gray-500 flex flex-col justify-start gap-2'>
            {pages.map((item,index)=>{
                return <li key={index} className="self-start">{item}</li>
            })}
            </ul>
        </div>

        </div>
    </div>
    </div>
    )
}

export default Footer