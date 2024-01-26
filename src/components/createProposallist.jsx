import React from 'react'
import { CiCircleList } from "react-icons/ci";

const createProposallist = () => {
  return (
    <div className='flex h-20 space-x-2 absolute top-[20rem] sm:left-[10rem] left-4 hover:scale-110 transition-transform '>
    <div className='w-20 shadow-2xl bg-slate-950 text-white  border-2 rounded-lg text-5xl border-double border-orange-600'>
      <CiCircleList className='mx-auto mt-2.5'/>
    </div>
    <h1 className='mt-5 text-3xl font-mono '>
      Proposal List
    </h1>
    </div>
  )
}

export default createProposallist
