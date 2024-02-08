import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
return (
    <div className=" flex justify-center pt-28 pb-36">
    <div className='w-[60vw]'>
        <h1 className='text-5xl font-bold mb-8'>CONTACT US</h1>
        <div className="flex flex-col items-start justify-start gap-4">
            <ul className='text-lg text-gray-700 flex flex-col justify-start gap-2'>
                <li className="self-start flex gap-2 items-center">
                    <FaLocationArrow/> 
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

    </div>
    </div>
)
}

export default Contact