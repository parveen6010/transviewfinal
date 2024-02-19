import React from "react";
import { Link } from "react-router-dom";
function TrackVehicle() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/gps-navigation-system-phone-self-driving-car_53876-98094.jpg?w=996&t=st=1708076248~exp=1708076848~hmac=a28fdd8844bdc34fa33c7e1c07a67814151fe1475a1024b5da9ab7b03482be04)] bg-contain bg-center">
      <div className="text-white h-1/3  p-5  flex flex-col items-center justify-evenly hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out shadow-xl">
        <h2 className="font font-extrabold p-2 text-2xl text-center">
          Explore Track My Vehicle for real-time insights on the go!
        </h2>
        {/* <p className="text-center mb-4">
          Monitor your vehicle's location in
          real-time, get instant alerts, and access historical data. Start
          tracking now for peace of mind on  go!
        </p> */}
        <Link to={'/VehicleTracking'}>
        <button
          className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
          
        >
          Track My vehicle
        </button>
        </Link>
      </div>
    </div>
  );
}

export default TrackVehicle;
