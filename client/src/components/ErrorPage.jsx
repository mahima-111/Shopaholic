import { Link } from 'react-router-dom';
import errorPic from '../assets/error-pic.jpg';

const ErrorPage = () => {
    
    return (
        <div className="h-screen flex justify-center pt-8">
        <div className='w-[70vw] flex flex-col items-center'>

            <div className='w-[40%]'><img src={errorPic} className='object-cover'/></div>

            <h1 className='text-4xl font-bold mb-4 mt-8'>OOPS!</h1>
            <h2 className='text-4xl font-bold mb-4'>{`SOMETHING WENT WRONG :(`}</h2>
            <Link to='/'><button className='ml-8 px-4 py-2 bg-purple-600 rounded-sm font-medium text-lg hover:bg-purple-700 text-white duration-200 flex items-center gap-2'>Go to HomePage</button></Link>
    
        </div>
        </div>
    )
}

export default ErrorPage