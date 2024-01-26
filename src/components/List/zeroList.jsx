import React from 'react'
import { IoCreate } from "react-icons/io5";
const zeroList = () => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='flex flex-wrap space-x-4 space-y-4 '>
            <div className='w-fit h-[10rem] shadow-2xl shadow-orange-600 hover:scale-110 transform transition-transform rounded-3xl flex justify-center text-center text-7xl border-2 border-violet-600'
                onClick={() =>handleClickScroll('createProposal')}
            >
                <img src='create.jpg' className='object-cover rounded-3xl' />
                <div className='text-black mt-8 absolute bg-opacity-80'>
                    <IoCreate />
                </div>
            </div>
        </div>
    )
}

export default zeroList
