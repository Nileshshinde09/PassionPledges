import dbService from "../appwrite/db";
import storageService from "../appwrite/storage";
// import { useDispatch,useSelector } from "react-redux"
// const proposalState = useSelector((state)=>state.proposal.uploadState)
// const proposalData = useSelector((state)=>state.proposal.uploadData)
// if (proposalState) {
//     console.log(proposalData);
// }

const uploadProposal=async({userId,promiseeName,title,content,optGender,optType,appearance})=>{
    let imageID=null;
    try {
        const img = document.getElementById("Promisee_Image").files[0];
        if(img){
            
             await storageService.uploadImage().then((res)=>{
                imageID=res;
                console.log(res);
             }).catch((error)=>{
                console.log(error);
             })
        }
        if (imageID) {
            await dbService.createProposal({userId,appearance,Title:title,content,imageID,Type:optType,promiseeName,optGender})
            .then((res)=>{
                console.log((res));
            })
            .catch((error)=>{
                console.log(error);
            })
            
        }
        else{
            imageID="";
            await dbService.createProposal({userId,appearance,Title:title,content,imageID,Type:optType,promiseeName,optGender})
            .then((res)=>{
                console.log((res));
            })
            .catch((error)=>{
                console.log(error);
            })
        }


    } catch (error) {
        console.log(error);
    }

}

export default uploadProposal;