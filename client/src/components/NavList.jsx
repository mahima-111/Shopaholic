import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavList = () => {
    const [isVisible,setIsVisible]=useState(false);
    const visible=()=>{
        setIsVisible(!isVisible);
    }

return (
<ul className='flex gap-4 text-lg'>
    <li><Link to='/' className='hover:text-violet-400 duration-200' onClick={()=>{
        if(isVisible){
            setIsVisible(false);
        }
    }}>HOME</Link></li>
    <li><Link to={'about'} className='hover:text-violet-400 duration-200' onClick={()=>{
        if(isVisible){
            setIsVisible(false);
        }
    }}>ABOUT</Link></li>

    <li>
        <button onClick={visible}className='relative hover:text-violet-400 duration-200 flex items-center gap-1'>
        CATEGORIES
        {isVisible?<IoChevronUpSharp/>:<IoChevronDownSharp/>}
        </button>

        {isVisible && <ul className='absolute top-14 bg-white text-black flex flex-col gap-3 px-4 py-4'>
            <li><Link to={'category/1'} onClick={visible}>HEADPHONES</Link></li>
            <li><Link to={'category/2'} onClick={visible}>BLUETOOTH SPEAKERS</Link></li>
            <li><Link to={'category/3'} onClick={visible}>WIRELESS EARBUDS</Link></li>
            <li><Link to={'category/4'} onClick={visible}>SMART WATCHES</Link></li>
        </ul>}
    </li>

    <li><Link to='contact' className='hover:text-violet-400 duration-200' onClick={()=>{
        if(isVisible){
            setIsVisible(false);
        }
    }}>CONTACT</Link></li>
</ul>
)
}

export default NavList