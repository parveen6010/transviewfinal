import React from "react";
import { MdConfirmationNumber } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
function VehicleRc({ PropAuth }) {
  const navigate = useNavigate();
  const Paymentgo = () => {
    navigate("/Payment");
  };


  const [isChecked, setIsChecked] = useState(false);

  const [auth, setauth] = useState(PropAuth);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className=" mb-14">
        <div className="flex flex-col h-1/3 w-full px-10">
          <h3 className="text-xl font-bold text-green-500 mb-4 mt-4">
            Driver Information
          </h3>
          <div className="flex flex-col w-full justify-between">
            <div className="flex w-full justify-between">
              <div>
                <h3 className="text-xl text-center font-semibold">
                  License Number
                </h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Driver Name</h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXX
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h3 className=" text-xl text-center font-semibold">State</h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  Date of Birth
                </h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXX
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h3 className="font-semibold text-xl">Permanent Address</h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Expiration Date</h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-1/3 w-full justify-start px-10 ">
          <h3 className="text-xl font-bold text-green-500 mb-4 mt-4">
            Vehicle Information
          </h3>
          <div className="flex flex-col w-full justify-between">
            <div className="flex w-full justify-between">
              <div>
                <h3 className="font-semibold text-xl">Registration Date</h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  Owner Name
                </h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXXX
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h3 className="font-semibold text-xl">Vehicle Category</h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Permanent Address</h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXXX
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h3 className="font-semibold text-xl">Chassis Number</h3>
                <p className="text-gray-400 font-semibold">XXXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Engine Number</h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXXX
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h3 className="font-semibold text-xl">Policy Number</h3>
                <p className="text-gray-400 font-semibold ">XXXXX</p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="font-semibold text-xl">Validity Till</h3>
                <p className="text-gray-400 font-semibold flex justify-end">
                  XXXXX
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Fitness Validity</h3>
              <p className="text-gray-400 font-semibold">XXXXX</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col h-1/3 w-full justify-start pb-5 px-10">
           <h3 className="text-xl font-bold text-green-500 mb-4 mt-4"> Additional Information</h3>
           <div className="flex flex-col">
             <h2 className="font-semibold text-l mb-5">Cargo Dimensions </h2>
             <div className="flex justify-between gap-2">
                
                <input type="number" placeholder={`${PropAuth?"XXXX":"length"}`} className={`${PropAuth?"bg-yellow-100":"bg-gray-200"} outline-none text-sm flex-1 p-2`} disabled={PropAuth}/>
                <input type="number" placeholder={`${PropAuth?"XXXX":"breadth"}`} className={`${PropAuth?"bg-yellow-100":"bg-gray-200"} outline-none text-sm flex-1 p-2`} disabled={PropAuth}/>
                <input type="number" placeholder={`${PropAuth?"XXXX":"height"}`} className={`${PropAuth?"bg-yellow-100":"bg-gray-200"} outline-none text-sm flex-1 p-2`} disabled={PropAuth}/>
             </div>
           </div>
        </div> */}

        <div className="flex gap-3 justify-center  items-center mt-5 mb-5">
          {PropAuth && (
            <div className="flex">
              <input type="checkbox" onChange={handleCheckboxChange} />
              <p className="ml-2">I/we consent the above Information is true</p>
            </div>
          )}
        </div>
        <div
          className="flex w-full items-center justify-center pb-10
    "
        >
          {PropAuth ? (
            <Link to={"/docupload"}>
              <button
                type="submit"
                className={`border-2 ${
                  isChecked
                    ? "border-green-700 bg-green-700"
                    : "border-green-300 bg-green-300"
                } text-white rounded-full px-12 py-2  inline-block font-semibold    `}
                disabled={!isChecked}
              >
                Generate GMN
              </button>
            </Link>
          ) : (
            <Link to={"/AuthorizationForm"}>
              <button className="border-2 border-green-700 bg-green-700 text-white rounded-full px-12 py-2  inline-block font-semibold ">
                Authorize
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleRc;
