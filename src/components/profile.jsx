import React from 'react'
import { useState } from 'react'
import LogOut from '../utils/Logout'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
const profile = () => {
    const dispatch = useDispatch();

    const handleLogout=async()=>{
        const result = await LogOut();
        if (result){
            dispatch(logout())        
        }
       
    }
    const [gender, setgender] = useState(true)
  return (
    <div className="shadow-2xl hover:scale-110 transition-transform backdrop-blur-xl bg-white/30 sm:h-[25rem] sm:w-[20rem] w-[20rem] h-[19rem] rounded-md p-4">
        {
            gender?
            <img src='profilePicM.png' className='h-20 mx-auto'/>
            :
            <img src='profilePicW.png' className='h-20 mx-auto'/>

        }
        <h1 className='text-xl sm:text-2xl text-center'>
            nilesh shinde
        </h1>
        <h1 className='text-xl sm:text-2xl sm:pt-6 text-center'>
            Age:19
        </h1>
        <h1 className='text-xl sm:text-2xl sm:pt-2 text-center'>
            Proposal Count:10
        </h1>
        <h1 className='text-xl sm:text-2xl sm:pt-2 text-center'>
            Proposal Accepted:1
        </h1>
        <h1 className='text-xl sm:text-2xl sm:pt-2 text-center'>
            Proposal Pending:4
        </h1>
        <button onClick={()=>handleLogout()} className='p-3 w-30  hover:bg-red-400 rounded-2xl border-2 border-orange-300'>
            Log out
        </button>
    </div>
  )
}

export default profile
