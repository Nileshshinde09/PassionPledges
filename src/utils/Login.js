import authService from "../appwrite/auth";
const Login=async({email,password})=>{
    try {
        const result= await authService.login({email,password});
        console.log(result);
        return result
     } catch (error) {
        console.log(error);
        return false
     }
}

export default Login