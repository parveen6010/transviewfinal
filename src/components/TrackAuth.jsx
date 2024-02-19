import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.css'
function TrackAuth() {
  const [isVerified, setVerified] = useState(null);
  const [otp, setOtp] = useState(Array(6).fill(""));// Initialize otp as an array of 6 empty strings
  const correctOTP=[1,2,3,4,5,6];

  
  const navigate = useNavigate()

  const tostershow = () => {
    // Show toast message
    toast.success('Action Completed Sucessfuly!', {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    setTimeout(() => {
      navigate("/Trip");
    }, 3000);
  }

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value; // Update the specific otp box value
    setOtp(newOtp);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleVerify=()=>{
    const otpNum = otp.map(Number); // Convert otp array elements to numbers
    if(JSON.stringify(otpNum) === JSON.stringify(correctOTP)) {
      setVerified(true);
     
    } else {
      setVerified(false);
    }
  }
  return (
    <div className="bg-gradient-to-tr from-white to-green-400  h-screen flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          OTP Verification Form
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block"></div>
        <div className="m-4">
          <p className="text-gray-400">
            Enter OTP Below
          </p>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className=" p-2 flex items-center gap-3 justify-center mr-2 mb-2 w-1/2 rounded-md">
               {otp.map((value, index) => (
              <input
                key={index}
                type="number"
                className="bg-gray-200 outline-none text-sm flex-1 p-4"
                name={`otp${index}`}
                placeholder=""
                onChange={(e) => handleChange(e, index)}
                style={{ width: "30px", height: "30px", textAlign: "center" }} // Added style to make the input box square and center the text
              />
            ))}
             {isVerified === true && <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" />}
            {isVerified === false && <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />}
          </div>
        </div>

        <div className="flex flex-row justify-evenly w-full">
          <button
            type="button"
            className="border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
            onClick={handleVerify} 
          >
            Verify
          </button>
          <button
            type="button"
            className={`border-2 ${
              isVerified
                ? "border-green-500 bg-green-500 cursor-pointer"
                : "border-green-300 bg-green-300 cursor-not-allowed disabled"
            } text-white rounded-full px-12 py-2 inline-block font-semibold`}
            onClick={tostershow} disabled={!isVerified} 
          >
            Get DPOD
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TrackAuth;
