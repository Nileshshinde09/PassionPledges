import React from 'react'
import { IoCreate } from "react-icons/io5";

const createProposal = () => {
  return (
    <div className='flex h-20 space-x-2 absolute top-[13rem] sm:left-[10rem] left-4 hover:scale-110 transition-transform '>
      <div className='w-20 shadow-2xl bg-slate-950 text-green-300  border-2 rounded-lg text-5xl border-double  border-orange-600'>
        <IoCreate className='mx-auto mt-2.5' />
      </div>
      <h1 className='mt-5 text-3xl font-mono '>
        Create Proposal
      </h1>
    </div>
  )
}

export default createProposal
