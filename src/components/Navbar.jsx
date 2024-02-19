import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar({userBtn,setUserBtn}) {
  const handleUser=()=>{
    setUserBtn(!userBtn);
  }
  return (
    <div className="w-full p-2 fixed top-0 z-20 bg-white shadow-gray-500 shadow-md">
      <nav className="flex justify-between p-2">
        <div className="">
          <Link to="/dashboard" className="text-3xl font-bold text-gray-700 pl-4">
            Transvue Soultions
          </Link>
        </div>
        <ul className="flex justify-evenly items-center w-[40%]">
          <li>
            <Link
              to="/dashboard"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/VehicleTracking"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Trace-My-Truck
            </Link>
          </li>
          <li>
            <Link
              to="/Documentlibrary"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Document Library
            </Link>
          </li>
          <li>
            <Link
              to="/MisMain"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Mis Report
            </Link>
          </li>
          <li>
            <Link
              to="/temp2"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Fill e-way Bill
            </Link>
          </li>
          <li onClick={handleUser} className="flex flex-col justify-center items-center">
             <FaUserCircle className="text-3xl"/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
