import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

      
function Ewayauth() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();

  const tempgo = () => {
     navigate("/temp2");
  }

  return (
    <div className="bg-gradient-to-tr from-white to-green-400   h-screen flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white border-2 rounded-md shadow-2xl shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
          Let's Fetch
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
        <p className="text-gray-400 mb-4 text-lg">Enter E-Way Bill Number</p>
        <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 w-1/2 rounded-md">
          <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
          <input
            type="number"
            className="bg-gray-200 outline-none text-sm flex-1"
            name="EwayBillNum"
            placeholder="E-Way Bill Number"
          />
        </div>
        <div className="flex flex-row justify-evenly w-full pb-5">
          <button
            type="button"
            className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
            onClick={tempgo}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Ewayauth;
