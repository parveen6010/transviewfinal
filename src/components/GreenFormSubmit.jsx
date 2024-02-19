import React from "react";
import { MdConfirmationNumber } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaTruck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import PopupImage from './pyimg.jpeg';
import VehicleRc from "./VehicleRc";
function GreenFormSubmit({ formData, greenFormInfo}) {

  const navigate = useNavigate();
  const [payment,setPayment]= useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);


  const closePopup = () => {
    setShowPopup(false);
    // navigate('/VehicleRc');
    setPayment(true);
  };
  const handleChange=()=>{
    
  }


  const Paymentgo = () => {
    
    setPopupContent(<img src={PopupImage} alt="Popup Image" />);
    setShowPopup(true);
  };
  
  const AuthorizationFormgo = () => {
    navigate("/AuthorizationForm");
  }

  return (
    <div className="bg-gradient-to-tr from-white to-green-400 pt-32 min-h-screen  w-screen  "> 

      <div className="w-[1040px] mx-auto bg-white px-8 rounded-md pt-8 ">
      <form
        action=""
        className=" "
      >
        <div className="flex w-full justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-500 mb-4  mt-4">Green Form</h2>
          </div>
          <h3>Vehicle Number {formData.VehicleNum}</h3>
        </div>
        
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-yellow-100 p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            < FaUser className={greenFormInfo.GRNumber ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="text"
              className="bg-yellow-100 outline-none text-sm flex-1"
              name="GRNumber"
              placeholder="GR Number"
              onChange={handleChange}
              value={greenFormInfo.GRNumber}
              disabled
            />
          </div>
          <div className="bg-yellow-100 p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdConfirmationNumber  className={greenFormInfo.Date ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="date"
              className="bg-yellow-100 outline-none text-sm flex-1 text-black"
              name="Date"
              placeholder="Date"
              onChange={handleChange}
              value={greenFormInfo.Date}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            < FaUser className={greenFormInfo.driverLicenseNumber ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="text"
              className="bg-yellow-100 outline-none text-sm flex-1"
              name="driverLicenseNumber"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.driverLicenseNumber}
              disabled
            />
          </div>
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdConfirmationNumber  className={greenFormInfo.driverNumber ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="number"
              className="bg-yellow-100  outline-none text-sm flex-1"
              name="driverNumber"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.driverNumber}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            <MdEmail  className={greenFormInfo.sourceEmail ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'}/>
            <input
              type="email"
              className="bg-yellow-100 outline-none text-sm flex-1"
              name="sourceEmail"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.sourceEmail}
              disabled
            />
          </div>
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdConfirmationNumber className={greenFormInfo.sourceNumber ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="number"
              className="bg-yellow-100 outline-none text-sm flex-1"
              name="sourceNumber"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.sourceNumber}
              disabled
             
            />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            <MdEmail  className={greenFormInfo.destinationEmail ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'} />
            <input
              type="email"
              className="bg-yellow-100  outline-none text-sm flex-1"
              name="destinationEmail"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.destinationEmail}
              disabled
             
            />
          </div>
          <div className="bg-yellow-100  p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdConfirmationNumber className={greenFormInfo.destinationNumber ? 'text-green-500 mr-2' : 'text-gray-400 mr-2'}/>
            <input
              type="number"
              className="bg-yellow-100  outline-none text-sm flex-1"
              name="destinationNumber"
              placeholder="xxxxxxxxxxxx"
              value={greenFormInfo.destinationNumber}
              disabled
             
            />
          </div>
        </div>
        <div className="flex flex-row justify-evenly w-full pb-5">
          {!payment && <button
            type="button"
            className={`border-2 ${
 
              "border-green-500 bg-green-500 cursor-pointer"
         
            } text-white rounded-full px-12 py-2 inline-block font-semibold`}
            onClick={Paymentgo}
          >
            Payment Gateway
          </button>}
          {/*  */}
        </div>
       
      </form>

      {showPopup && (
        <div onClick={closePopup} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div onClick={closePopup} className="bg-white w-80 overflow-auto shadow-lg">
            {popupContent}
          </div>
        </div>
      )}
      
      {payment && (<VehicleRc PropAuth={true}/>)}
      </div>

    </div>
  );
}

export default GreenFormSubmit;
