'use client';
import { FaUserCircle } from "react-icons/fa"


const Title = () => {
    return (
        <h5 className='text-xl text-white tracking-wider font-semibold text-opacity-80
        mr-auto ml-2 my-auto transition duration-300 ease-in-out pl-4'>
            Rss Feed Content
        </h5>
    )
}

const UserCircle = () => {
    return (
        <FaUserCircle size='24' className='text-white mr-3 ml-4 
        transition duration-300 ease-in-out'/>
    )
}

export default function TopNavigation() {
    return (
        <div className="flex flex-row items-center bg-opacity-90 
        w-full h-12 h-min-12 m-0 border-b border-b-slate-100">
            <Title />
            <UserCircle />
        </div>
    )
}