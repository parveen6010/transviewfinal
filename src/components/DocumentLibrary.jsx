import React from "react";
import { Link } from "react-router-dom";
function DocumentLibrary() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://cdn.pixabay.com/photo/2018/03/05/10/06/wallet-3200395_1280.jpg)] bg-cover bg-center">
      <div className="text-white h-1/3  p-5  flex flex-col items-center justify-evenly">
        <h2 className="font font-extrabold p-2 text-2xl text-center">
          Keeping track of your vehicle documents has never been easier!
        </h2>
        {/* <p className="text-center mb-4">
          No more scrambling for papers!
        All your vehicle documents are now just a click away.{" "}
      </p> */}
      <Link to={'/verify'}>
        <button
          className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
        >
          Show My Papers
        </button>
        </Link>
      </div>
    </div>
  );
}

export default DocumentLibrary;
