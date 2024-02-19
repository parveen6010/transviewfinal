import React from 'react'
import { useState } from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
function Signup({isSignUp,setIsSignUp}) {
  const [isVerified,setIsVerified]=useState({
    MobileOtp:null,
    emailOtp:null
  });
  const OTP={MobileOtp:"123456", emailOtp:"123456"};
  const [user,setUser]=useState({});
  const [userCollection,setUserCollection]=useState([])
  const isDisabled=()=>{
    return !(isVerified.MobileOtp && isVerified.emailOtp);
  }
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUserCollection([...userCollection,user]);
  }
  const handleVerify=(e)=>{
    const name=e.target.name;
    const val=e.target.val;
    if(name==="MobileOtpBtn"){
      if(user.MobileOtp==='')alert("please enter otp");
      else if(user.MobileOtp===OTP.MobileOtp){
        setIsVerified({...isVerified, MobileOtp: true});
      }
      else setIsVerified({...isVerified, MobileOtp: false});
    }else {
      if(user.emailOtp==='')alert("please enter otp");
      else if(user.emailOtp===OTP.emailOtp){
        setIsVerified({...isVerified, emailOtp: true});
      }
      else  setIsVerified({...isVerified, emailOtp: false});
    }
  }

  const handleSubmitBtnClick=()=>{
    setIsSignUp(false);
  }
  return (
    <div className=''>
        <form action="" className="flex flex-col items-centre gap-2" onSubmit={handleSubmit}>
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
                <FaRegAddressCard className={user.pan ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'}/>
               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required/>
            </div>
           <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
            <IoDocumentOutline className={user.gst ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'}/>
            <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required/>
           </div>
            
            <div className="flex flex-row items-center mr-2 mb-2">
              <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
                <MdOutlineEmail className={user.Email ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'}/>
                <input type='email' className='bg-gray-200 outline-none text-sm flex-1 text-black' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required/>
              </div>
              <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
                <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg' name='emailOtp' onChange={handleChange} placeholder='Enter OTP'/>
                {/* <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/> */}
                {isVerified.emailOtp === true && <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" /> }
                {isVerified.emailOtp === false && <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />}
              </div>
              
              <button type='button' onClick={handleVerify} name='emailOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Verify </button>
            </div>
            <div className="flex flex-row items-center mr-2 mb-2">
              <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
                 <CiMobile1 className={user.Phone ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
                <input type='number' className='bg-gray-200 outline-none text-sm flex-1' name='Phone' placeholder='Enter Your Mobile Number' onChange={handleChange} required/>
              </div>
              <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
                <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg' name='MobileOtp' onChange={handleChange} placeholder='Enter OTP' required />
                {/* <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/> */}
                {isVerified.MobileOtp === true && <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" /> }
                {isVerified.MobileOtp === false && <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />}
              </div>
              <button type='button' onClick={handleVerify} name='MobileOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white'>Verify</button>
            </div>
            <button type='submit' disabled={isDisabled()} className={`border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold ${!isDisabled() ? 'text-white bg-green-600 hover:bg-green-700' : 'text-green-500 cursor-not-allowed'}`}  onClick={handleSubmitBtnClick}>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup

