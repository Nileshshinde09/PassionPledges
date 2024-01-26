import * as Yup from 'yup';
export const signUpSchema=Yup.object(
    {
        fname:Yup.string().min(2).max(25).required("Please enter your name"),
        email:Yup.string().email().required("Please enter your email"),
        password:Yup.string().min(6).required("Please enter your password"),
        cpassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
    }
)


export const loginSchema=Yup.object(
    {
        email:Yup.string().email().required("Please enter your email"),
        password:Yup.string().min(6).required("Please enter your password"),
    }
)


export const ProposalSchema=Yup.object(
    {
        promiseeName:Yup.string().min(2).max(25).required("Please enter promisee name"),
        title:Yup.string().required("Please enter title"),
        content:Yup.string().required("Please enter Content")
    }
)