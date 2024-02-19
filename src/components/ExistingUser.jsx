import React, { useState } from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Existinguser() {
  const [isChecked, setIsChecked] = useState(false);
  const [msi, setMsi] = useState(""); // Corrected state variable name
  const navigate = useNavigate();

  const tempgo = () => {
    navigate("/temp2");
  }

  const gomis = () => {
    if (msi === "Intransit") { // Corrected comparison operator
      navigate("/Intransitmsi");
    }
    if (msi === "Delivered") { // Corrected comparison operator
      navigate("/Misreport");
    }
  }

  return (
    <div className="bg-gradient-to-tr from-white to-green-400 h-screen flex justify-center items-center">
      <div
        className="flex justify-between align-middle w-[80%] h-[80%] lg:mt-[5%] bg-white border-2 rounded-md shadow-2xl shadow-gray-300"
      >
        
        <form
        action=""
        className="flex flex-col justify-center items-center align-middle w-[80%] h-[80%] lg:mt-[4%] lg:ml-[10%] "
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
          Let's Start
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
        <p className="text-gray-400 mb-4 text-lg">Enter E-Way Bill Number</p>
        <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 w-1/2 rounded-md">
          <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
          <input
            type="number"
            className="bg-gray-200 outline-none text-sm flex-1 lg:font-semibold"
            name="EwayBillNum"
            placeholder="E-Way Bill Number"
          />
        </div>
        <div className="flex flex-row justify-evenly w-full pb-5">
          <Link to={'/Misreport'}>
          <button
            type="button"
            className="border-2 border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
          >
            Submit
          </button>
          </Link>
        </div>
      </form>

      <form className="lg:mr-4 lg:mt-4">
          <select onClick={gomis} onChange={(e) => setMsi(e.target.value)} className=" lg:rounded-xl bg-gray-200 cursor-pointer text-black  lg:p-1 lg:mt-1 lg:mb-2 lg:border-2 lg:w-[140px] transition-none">
            <option>Storical-Data</option>
            <option>Delivered</option>
            <option>Intransit</option>
          </select>
          <div>
         
          </div>
        </form>
    </div>
    </div>
  );
}

export default Existinguser;