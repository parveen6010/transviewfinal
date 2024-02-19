import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login({loginData, setLoginData,auth, setAuth}) {
  const navigate = useNavigate();

  const correctOTP = "123456";
  const dashboardgo = () => {
    navigate("/dashboard");
  };
  const handleOtpVerification = () => {
    if (JSON.stringify(loginData.MobileOtp) === JSON.stringify(correctOTP)) {
      setLoginData({ ...loginData, isVerified: true });
    } else {
      setLoginData({ ...loginData, isVerified: false });
    }
  };
  const handleChange = (e) => {
    // setUser({...user,[e.target.name]:e.target.value})
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleAuth = () => {
    setLoginData({ ...loginData, auth: true });
  };
  const isDisabled = () => {
    return !loginData.isVerified;
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
      <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
      <form action="" className="">
        <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 rounded-md">
          <CiMobile1 className="text-gray-400 mr-2" />
          <input
            type="number"
            className="bg-gray-200 outline-none text-sm flex-1"
            name="Phone"
            placeholder="Enter Your Mobile Number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-centre mb-4">
          <div className="bg-gray-200  flex flex-row items-center mr-2 rounded-md">
            <input
              type="number"
              className="bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg"
              name="MobileOtp"
              onChange={handleChange}
              placeholder="Enter OTP"
              required
            />
            {/* <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/> */}
            {loginData.isVerified === true && (
              <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" />
            )}
            {loginData.isVerified === false && (
              <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />
            )}
          </div>
          <button
            type="button"
            className="border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
            onClick={handleOtpVerification}
          >
            Get OTP
          </button>
        </div>
        <Link to={"/LoadingPage"}>
          <button
            type="submit"
            disabled={isDisabled()}
            className={`border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold ${
              !isDisabled()
                ? "text-white bg-green-600 hover:bg-green-700"
                : "text-green-500 cursor-not-allowed"
            }`}
            onClick={handleAuth}
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
