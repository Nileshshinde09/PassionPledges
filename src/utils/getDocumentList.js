import dbService from "../appwrite/db"



const getDocument=async({userId})=>{
    let result;
    if(userId){
            try {
                await dbService.listProposal({userId})
                .then((res)=>{
                    
                    result= res.documents
                })
                .catch((error)=>{
                    console.log(error);
                    return null;
                })
            } catch (error) {
                console.log(error);
            }
            return result;
    }
}
export default getDocument;

