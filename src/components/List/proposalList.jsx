import React ,{useEffect} from 'react'
import Proposals from './proposals'
import ZeroList from './zeroList'
import { useSelector,useDispatch } from 'react-redux';
import getDocument from '../../utils/getDocumentList';
import {startUpload} from '../../redux/slices/proposal'
import { useQueryClient , useQuery , useMutation } from '@tanstack/react-query';
const proposalList = () => {
    const queryClient =useQueryClient();
    const dispatch = useDispatch();
    const proposaldata = useSelector((state)=>state.proposal.proposalData)
    const userData_ = useSelector((state) => state.auth.userData)

  
        
      
      
    useEffect(() => {
      if (userData_) {
        getDocument({userId:userData_.$id}).then((res)=>{
          if (res) {
            dispatch(startUpload(res))
          }
        })
      }
    }, [userData_])
   
   
    return (
        <div className='flex flex-wrap space-x-4 space-y-4 justify-center'>
            <div></div>
            {
                proposaldata?
                <Proposals/>
                :
                <ZeroList/>
            }
            
        </div>
    )
}

export default proposalList
