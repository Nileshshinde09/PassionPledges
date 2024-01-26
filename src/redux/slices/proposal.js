import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proposalState:false,
  proposalData:null,
  updateProposalSate:false,
  updateProposalData:null
};

const proposalSlice = createSlice({
  name: 'proposal',
  initialState,
  reducers: {
    startUpload:(state,action)=>{
        state.proposalState=true;
        state.proposalData=action.payload;
    },
    stopUpload:(state,action)=>{
        state.proposalState=false;
        state.proposalData=null;
    },
    startUpdateProposal:(state,action)=>{
      state.updateProposalSate=true;
      state.updateProposalData=action.payload;
    },
    stopUpdateProposal:(state,action)=>{
      state.updateProposalSate=false;
      state.updateProposalData=null;
    }
  }
});

export const { startUpload, stopUpload } = proposalSlice.actions;
export default proposalSlice.reducer;
