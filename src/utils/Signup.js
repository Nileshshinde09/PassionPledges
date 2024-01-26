import authService from "../appwrite/auth";

const Login=async({email,cpassword})=>{
 try {
    const result=await authService.login({email,password:cpassword});
    return result.status
 } catch (error) {
    console.log(error);
    return false
 }
}


export default Login;

