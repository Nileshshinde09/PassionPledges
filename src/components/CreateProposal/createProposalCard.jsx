import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik'
import { ProposalSchema } from '../../yup';
import { useSelector,useDispatch } from 'react-redux';
import uploadProposal from '../../utils/UploadProposal';
import { startUpload } from '../../redux/slices/proposal';
import getDocument from '../../utils/getDocumentList';
import { useQueryClient , useQuery , useMutation } from '@tanstack/react-query';

const createProposalCard = () => {
  
  
  const userData_ = useSelector((state) => state.auth.userData)
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: (values) => {
      return uploadProposal({ ...values })
    }
  })
  let data=null;
  const handleClickScroll = (id) => {
    if (errors.promiseeName || errors.title) return;
    getDocument({userId:userData_.$id}).then((res)=>{
      data=res;
      dispatch(startUpload(data))
    })
    // if (data) {
    //   dispatch(startUpload(
    //       data        
    //   ));
    // }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const initialValues = {
    promiseeName: "",
    title: "",
    content: "",
    optGender: "",
    optType: "",
    appearance: 1
  }
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ProposalSchema,
    onSubmit: (values, action) => {

      try {
        values['userId'] = userData_.$id;
        values.optGender=document.getElementById("optGender").value
        values.optType=document.getElementById("optType").value
        mutation.mutate(values)
        
      } catch (error) {
        console.log(error);
      }
      action.resetForm();
    }

  })

  return (
    <div className='h-screen overflow-y-scroll no-scrollbar'>
      <h1 className='text-4xl text-center pt-3 font-mono'>Create Proposal</h1>
      <div className='p-10 flex '>


        <form className='mx-auto' onSubmit={handleSubmit}>
          {errors.promiseeName && touched.promiseeName ? <p className='text-red-600 text-center'>{errors.promiseeName}</p> : <></>}
          <div className="mb-6 flex space-x-4">
            <label htmlFor="large-input" className="w-20 block mb-2 text-2xl font-thin text-gray-900 ">Promisee Name :</label>
            <input type="text" name='promiseeName'
              value={values.promiseeName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="large-input" className="block w-full sm:w-[20rem] h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>

          {errors.title && touched.title ? <p className='text-red-600 text-center'>{errors.title}</p> : <></>}
          <div className="mb-6 flex space-x-4">
            <label htmlFor="large-input" className="w-20 block mb-2 text-2xl font-thin text-gray-900 ">Title:</label>
            <input type="text" name='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              id="large-input" className="block w-full sm:w-[30rem] h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>

          {errors.content && touched.content ? <p className='text-red-600 text-center'>{errors.content}</p> : <></>}
          <div className="mb-6 flex space-x-4">
            <label htmlFor="large-input" className="w-20 block mb-2 text-2xl font-thin text-gray-900 ">Content:</label>
            <textarea type="text" name='content'
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              id="large-input" className="block w-full sm:w-[30rem] h-20 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>

          <p className='text-left text-red-600'>*Optional</p>
          <div className="mb-6 flex space-x-4">
            <label htmlFor="large-input" className="w-20 block mb-2 text-2xl font-thin text-gray-900 ">Promisee Image</label>
            <input type="file" id="Promisee_Image" name='promiseeImage' className="block w-full sm:w-[30rem] h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>
          
          <div className="mb-6 flex space-x-4">
            <label htmlFor="countries" className=" block mb-2 text-sm font-medium text-gray-900 ">Select Promisee's Gender</label>
            <select id="optGender" name='optGender'
              value={values.optGender}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              id="optType"
              name="optType"
              defaultValue={values.optType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="Proposal">Proposal</option>
              <option value="Apology">Apology</option>
            </select>

          </div>

          <div className="mb-6 flex space-x-4">
            <label htmlFor="large-input" className="w-36 block mb-2 text-2xl font-thin text-gray-900 ">appearance :</label>
            <input type="number" name='appearance' min={1} max={20}
              value={values.appearance}
              onChange={handleChange}
              onBlur={handleBlur}
              id="large-input" className="block w-full sm:w-[10rem] h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>


          <button onClick={() => handleClickScroll('list')} type='submit' className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Save
            </span>
          </button>
        </form>
        <div>

        </div>
      </div>
    </div>
  )
}

export default createProposalCard
