import React from 'react'
import { RiQuestionAnswerFill } from "react-icons/ri";

const createAnswer = () => {
  return (
    <div className='flex h-20 space-x-2 absolute top-[27rem] sm:left-[10rem] left-4 hover:scale-110 transition-transform '>
    <div className='w-20 shadow-2xl bg-slate-950 text-cyan-300  border-2 rounded-lg text-5xl border-double  border-orange-600'>
      <RiQuestionAnswerFill className='mx-auto mt-2.5'/>
    </div>
    <h1 className='mt-5 text-3xl font-mono '>
      Proposal Answer
    </h1>
    </div>
  )
}

export default createAnswer
