import React from 'react'
import Homepagecontent from '../homepagecontent'
import CreateProposal from '../createProposal'
import CreateProposallist from '../createProposallist'
import CreateAnswer from '../createAnswer'
import Profile from '../profile'
import CreateProposalCard from '../CreateProposal/createProposalCard'
import ProposalList from '../List/proposalList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import getUser from '../../utils/GetUser'
import { login } from '../../redux/slices/authSlice'
const home = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const selector = useSelector((state)=>state.auth.status)

  useEffect(() => {

    if (!selector) {
      navigate('/login')
    }
    const current=getUser();
    current.then((res)=>{
      dispatch(login(res))
    })

  }, [selector])
  


  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <img src='logo.png' className='fixed' />
        <Homepagecontent />
      </div>

      <div className='no-scrollbar'>

          <div className=' bg-gradient-to-r from-purple-500 to-pink-500 h-screen overflow-hidden'>
            <div className="iibg-cover bg-center h-screen sm:w-[45rem] w-[30rem] mx-auto opacity-30" style={{ backgroundImage: 'url("proposal.png")' }}>
            </div>
        <div className='flex'>
            <div onClick={()=>handleClickScroll('createProposal')}>
            <CreateProposal/>
            </div>
            <div onClick={()=>handleClickScroll('list')}>
            <CreateProposallist/>
            </div>
            <div onClick={()=>handleClickScroll('answer')}>
            <CreateAnswer/>
            </div>
              <div className='text-black p-10 absolute sm:right-[10rem] sm:top-[6rem] top-[35rem] mx-auto'>
                <Profile/>
              </div>
          </div>
        </div>

        <div className="relative">
          <div  id='createProposal' className=" sticky top-0 h-screen flex flex-col  bg-gradient-to-b from-green-200 to-blue-200">
            <CreateProposalCard/>
          </div>
          <div id='list' className="p-10 no-scrollbar overflow-y-scroll sticky top-0 h-screen flex flex-col  bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <ProposalList/>
          </div>

          <div id='answer' className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
            <h2 className="text-4xl font-bold">The Fourth slide</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default home
