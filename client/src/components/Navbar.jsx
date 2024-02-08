import { BsCart3 } from "react-icons/bs";
import NavList from './NavList';
import { GoSearch } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App"
import Search from "./navElements/Search";
const Navbar = () => {
    const {cartQuantity}=useContext(AppContext);
    const [showSearch,setShowSearch]=useState(false);
return (
<div className='w-full bg-zinc-800 text-white/90 fixed top-0 left-0 z-10 flex justify-center'>
<div>
<div className='flex w-[80vw] justify-between items-center py-3'>

<NavList/>

<h1 className='font-medium text-4xl hover:text-violet-400 duration-200 cursor-pointer'><Link to='/'>SHOPAHOLIC</Link></h1>

<ul className='flex gap-4 text-3xl'>
    <li className='cursor-pointer hover:text-violet-400 duration-200' onClick={()=>{
        setShowSearch(true);
    }}>
        <GoSearch />
    </li>

    <li className='cursor-pointer hover:text-violet-400 duration-200'>
        <Link to='/wishlist'><GoHeart /></Link>
    </li>

    <li className='relative cursor-pointer hover:text-violet-400 duration-200'>
        <Link to='/cart'>
        <BsCart3 />
        <div className='absolute bg-violet-400 bottom-3 right-[-0.5rem] rounded-full px-2 py-[0.15rem] text-xs font-semibold text-white'>{cartQuantity}</div>
        </Link>
    </li>
</ul>

</div>
{showSearch && <Search setSearch={setShowSearch}/>}
</div>
</div>
)
}

export default Navbar