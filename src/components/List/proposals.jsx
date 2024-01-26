import React,{useEffect , useState,useId} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import getImagePreview from '../../utils/getImage';
import deleteDocument from '../../utils/deleteDocument';
import { startUpload } from '../../redux/slices/proposal';
import getDocument from '../../utils/getDocumentList';
import { useQueryClient , useQuery , useMutation } from '@tanstack/react-query';

const proposals = () => {
    var value;
    const dispatch = useDispatch();
    const [data, setData] = useState(useSelector((state) => state.proposal.proposalData))
    const userData_ = useSelector((state)=>state.auth.userData)

    console.log(data);
    if (data) {
      console.log("Hello world ");
      dispatch(startUpload(data))
    }

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const getImage=(id,type,gender)=>{
        
        let img;
        let imageID=id;
        if (id==null) {
            if (type == 'Apology' && gender == 'Male') {
                img = 'apologyDefaultImageMale.jpg'
            }
            else if (type == 'Apology' && gender == 'Female') {
                img = 'apologyDefaultImageFemale.jpg'
            }
            else if (type == 'Proposal' && gender == 'Male') {
                img = 'proposalDefaultImage.jpg'
            }
            else if (type == 'Proposal' && gender == 'Female') {
                img = 'proposalDefaultImageFemale.jpg'
            }
            return img
        }
        else{
           img=getImagePreview({imageID})
        }
        return img
    }
    
    
    
    const updateCard=(value)=>{
        console.log("update",value);
        handleClickScroll('createProposal');
    }


    const deleteCard=(value)=>{
        if (deleteDocument(value)){
            getDocument({userId:userData_.$id}).then((res)=>{
                if (res) {
                    dispatch(startUpload(res))
                    
                }
            })
            // const newData =data.filter((val)=>val.$id !== value);
            // console.log(newData);
            // setData(newData)
            console.log("Proposal Successfully deleted !!");
        }
        else{
            console.log("Failed to Delete Proposal !!");
        }
    }
    const copyUrl=(value)=>{
        console.log("Copy Url",value);
    }

    return (
        <>
            {
                data?data.map((val) =>(
                    <div key={useId()} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="p-8 rounded-t-lg" src={getImage(val.imageID,val.Type,val.optGender)} alt="product image" />
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{val.Title || <></>}</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className=" items-center space-x-1 rtl:space-x-reverse">
                                <div></div>
                                <div className='flex text-xl text-slate-300'>  <h1>Creation Date :</h1>{val.$createdAt || <></>}  </div>
                                <div className='flex text-xl text-slate-300'>  <h1>Updation Date :</h1>{val.$updatedAt || <></>}  </div>
                                <div className='flex text-xl text-slate-300'>  <h1>Appearance :</h1>{val.appearance || <></>}  </div>
                                <div className='flex text-xl text-slate-300'>  <h1>Promisee Name :</h1>{val.promiseeName || <></>}  </div>
                                <div className='flex text-xl text-slate-300'>  <h1>Proposal Type :</h1>{val.Type || <></>}  </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>updateCard(val.$id)}> Update </button>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>copyUrl(val.$id)}> Copy Url </button>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>deleteCard(val.$id)}> Delete </button>
                        </div>
                    </div>
                </div>)
                )
                    :
                    <></>
            }
        </>
    )
}

export default proposals
