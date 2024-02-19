import React from "react";
import { Link } from "react-router-dom";
function GreenLogistic() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://cdn.pixabay.com/photo/2016/11/17/10/04/road-1831154_1280.jpg)] bg-cover bg-center">
      <div className="text-white h-1/3  p-5  flex flex-col items-center justify-evenly hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out">
        <h2 className="font font-extrabold p-2 text-3xl text-center">
          Experience the Paperless and secure-digital green logistics !
        </h2>
        <Link to={"/ewayauth"}>
        <button
          className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
          
        >
          Green Logistics
        </button>
        </Link>
      </div>
    </div>
  );
}

export default GreenLogistic;
