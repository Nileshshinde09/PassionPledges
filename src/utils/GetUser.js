import authService from "../appwrite/auth";
const getUser=async()=>{
    try {

        const currentUser=await authService.getCurrentUser();
        console.log(currentUser);
        return currentUser
        
    } catch (error) {
        console.log(error);
        return false
    }
}

export default getUser;