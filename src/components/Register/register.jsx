import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../../yup'
import signUp from '../../utils/Signup'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const register = () => {
  const [count, setcount] = useState(3)
  const navigate= useNavigate();
  const [changeColor, setchangeColor] = useState('bg-white')
  const selector = useSelector((state)=>state.auth.status)

  useEffect(() => {
    if (selector) {
      navigate('/')
    }
  }, [])
  useEffect(() => {
    try {
      setInterval(() => {
        const random=Math.floor(Math.random()*4)
        if (random==0) return
        setcount(random)
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  useEffect(()=>{
    if (count==1) {
      setchangeColor(['bg-fuchsia-400'])
    }
    else if(count==2){
      setchangeColor(['bg-blue-400'])
    }
    else if(count==3){
      setchangeColor(['bg-slate-200'])
    }
  },[count])

  const initialValues={
    fname:"",
    email:"",
    password:"",
    cpassword:""
  }
  const {values,errors,handleBlur,touched,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchema,
      onSubmit:(values, action)=>{
    if(signUp(values)){
      navigate('/login')
    }
    else{
      console.log('Error While Register ');
    }

    action.resetForm();
      }
      
    })
    console.log(errors);
  return (
    <div className='sm:flex bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
      <div className=''>
        <img src={`propose${count}.png`} className=' w-[25rem] sm:w-[20rem] md:w-[40rem]' />
      </div>
      <div className='sm:mx-auto'>


        <section className="">
          <div className="flex flex-col items-center sm:justify-center  px-6 py-8 md:h-screen lg:py-0 ">
            <div className='rounded-lg shadow-gray-950 shadow-2xl'>

              <div className={`mx-auto w-[25rem] ${changeColor[0]} rounded-lg bg-opacity-80 shadow dark:border md:mt-0 sm:max-w-md xl:p-0`}>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Register
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  {errors.fname && touched.fname ?<p className='text-red-600 text-center'>{errors.fname}</p>:<></>}
                  <div>
                      <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 ">Your Full Name</label>
                      <input type="text" name="fname" id="fname"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jhon doe" required=""/>
                  </div>

                  {errors.email && touched.email ?<p className='text-red-600 text-center'>{errors.email}</p>:<></>}

                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  {errors.password && touched.password ?<p className='text-red-600 text-center'>{errors.password}</p>:<></>}

                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Create Password</label>
                      <input type="password" name="password" id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  {errors.cpassword && touched.cpassword ?<p className='text-red-600 text-center'>{errors.cpassword}</p>:<></>}

                  <div>
                      <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                      <input type="password" name="cpassword" id="cpassword"
                      value={values.cpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                  <p className="text-sm font-light text-gray-800 ">
                      Do you already have an account ? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link>
                  </p>
              </form>
          </div>
      </div>
      </div>
  </div>
</section>
    </div>
    </div>
  )
}

export default register
