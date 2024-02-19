import React from "react";
import { useNavigate } from 'react-router-dom';


function DashBody() {

  const navigate = useNavigate();

  const verifygo = () => {
      navigate("/verify");
  }
  const tamp2ewaybill =()=>{
    navigate("/ewayauth");
  }
 ;
  const VechicleTrakinggo =()=>{
    navigate("/VehicleTracking");
  }


  return (


    <div className="flex justify-around items-center gap-2 h-screen bg-white">

  <div className="text-white w-1/3 bg-black p-5 h-full flex flex-col items-center justify-center hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out">
        <h2 className="font font-extrabold p-2 text-2xl text-center">Experience the Paperless and secure-digital green logistics !</h2> 
        <button className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
       onClick={tamp2ewaybill}
        >
          Green Logistics
        </button>
      </div>

      <div className="text-white w-1/3 bg-green-700 p-5 h-full flex flex-col items-center justify-center hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out">
        <h2 className="font font-extrabold p-2 text-2xl text-center">Explore Track My Vehicle for real-time insights on the go!</h2>
        {/* <p className="text-center mb-4">
          Monitor your vehicle's location in
          real-time, get instant alerts, and access historical data. Start
          tracking now for peace of mind on  go!
        </p> */}
        <button className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2" 
        onClick={VechicleTrakinggo}
        >
          Track My vehicle
        </button>
      </div>

<div className="text-white w-1/3 bg-green-400 p-5 h-full flex flex-col items-center justify-center hover:w-screen hover:transition-all hover:duration-500 hover:ease-in-out ">
    
      <h2 className="font font-extrabold p-2 text-2xl text-center">Keeping track of your vehicle documents has never been easier!</h2>
        {/* <p className="text-center mb-4">
            No more scrambling for papers!
          All your vehicle documents are now just a click away.{" "}
        </p> */}
        <button className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
        onClick={verifygo}
        >
          View Vehicle Document
        </button>
      </div>

  
    </div>
  );
}

export default DashBody;
