import authService from "../appwrite/auth";

const LogOut=async()=>{
 try {
    const result=await authService.logout();
    return result
 } catch (error) {
    console.log(error);
    return false
 }
}


export default LogOut;