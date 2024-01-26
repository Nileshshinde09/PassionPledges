import dbService from "../appwrite/db"
const deleteDocument=async(proposalId)=>{
    await dbService.deleteProposal({ proposalId })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error;
    })
}
export default deleteDocument;