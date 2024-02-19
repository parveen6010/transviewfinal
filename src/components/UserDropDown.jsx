import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function UserDropDown({loginData, setLoginData,userBtn,setUserBtn}) {
  const handleAuth = () => {
    setLoginData({ ...loginData,isVerified:null, auth: false });
    setUserBtn(false);
  };
  return (
    <div className="w-[25vw] h-[25vh] flex flex-col justify-evenly items-start absolute bg-white mx-auto z-20 top-20 left-[74vw] shadow-lg rounded-md ">
      <div className="w-full flex justify-center items-center">Hii user !!</div>
      <div className="flex w-1/3 justify-evenly items-center ml-3">
        <FaUserCircle />
        <button>View Profile</button>
      </div>
      <div className="flex w-1/3 justify-evenly items-center">
        <IoMdLogOut className="text-red-500" />
        <Link to={"/"}>
          <button onClick={handleAuth}>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default UserDropDown;
