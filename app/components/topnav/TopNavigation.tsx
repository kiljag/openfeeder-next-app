'use client';
import { FaUserCircle } from "react-icons/fa"


const Title = () => {
    return (
        <h5 className='text-xl text-gray-500 tracking-wider font-semibold text-opacity-80
        mr-auto ml-2 my-auto transition duration-300 ease-in-out pl-4'>
            Rss Feed Content
        </h5>
    )
}

const UserCircle = () => {
    return (
        <FaUserCircle size='24' className='text-gray-800 mr-3 ml-4 
        transition duration-300 ease-in-out hover:text-pink-300'/>
    )
}

export default function TopNavigation() {
    return (
        <div className="flex flex-row
        bg-gray-300 dark:bg-gray-700 bg-opacity-90 
        w-full h-16 m-0 shadow-lg">
            <Title />
            <UserCircle />
        </div>
    )
}