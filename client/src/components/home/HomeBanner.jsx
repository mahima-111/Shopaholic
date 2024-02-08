import React from 'react'
import homeImg from '../../assets/banner-img.png'
const HomeBanner = () => {
return (
    <div className='bg-gradient-to-r from-purple-700 to-indigo-800 h-screen w-full flex justify-center text-white pt-28 pb-16'>
        <div className='w-[70vw] flex gap-16 items-center'>
        <div className='flex flex-col items-center gap-4 justify-center'>
            <h1 className='text-8xl font-bold'>SALES</h1>
            <p className='text-center text-lg ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, accusamus iure? Fuga consectetur iste veniam ratione eveniet aliquam officiis placeat!</p>
            <div className='flex gap-6'>
                <button className='px-4 py-2 border-2 border-white rounded-sm text-lg font-medium hover:bg-purple-600 hover:border-purple-600 duration-300'>Read More</button>
                <button className='px-4 py-2 bg-purple-600 rounded-sm font-medium text-lg border-2 border-purple-600 hover:border-white hover:bg-transparent duration-300'>Shop Now</button>
            </div>
        </div>
        <div className='w-[90%]'><img src={homeImg} className='object-cover'/></div>
        </div>
    </div>
)
}

export default HomeBanner