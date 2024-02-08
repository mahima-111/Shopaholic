import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const NewsLetter = () => {
return (
    <div className="bg-news py-20 mt-16 grid place-items-center bg-cover w-full">
        <div className='flex flex-col gap-3 text-center'>
            <h3 className='text-gray-600 text-lg'>NEWSLETTER</h3>
            <h1 className='font-semibold text-3xl'>SIGN UP FOR LATEST UPDATES AND OFFERS</h1>
            <div className='flex justify-center gap-4'>
            <input type='text'placeholder='Email Address' className='py-1 px-3 rounded-sm outline-none w-[30vw]'/>
            <button className='py-2 px-6 rounded-sm bg-violet-600 text-white text-md' >Subscribe</button>
            </div>
            <h3 className='text-gray-600 text-md'>Will be used in accordance with our privacy policy.</h3>
            <ul className='flex gap-4 justify-center text-white text-xl'>
                <li className='cursor-pointer bg-gray-800 rounded-full px-2 py-2'> <FaInstagram/> </li>
                <li className='cursor-pointer bg-gray-800 rounded-full px-2 py-2'> <FaFacebookF/> </li>
                <li className='cursor-pointer bg-gray-800 rounded-full px-2 py-2'> <FaTwitter/> </li>
                <li className='cursor-pointer bg-gray-800 rounded-full px-2 py-2'> <FaLinkedinIn/> </li>
            </ul>
        </div>
    </div>
)
}

export default NewsLetter