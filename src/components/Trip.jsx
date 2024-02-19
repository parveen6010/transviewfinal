import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaRegMap } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Map from './map.png';
function Trip() {
    const navigate = useNavigate();
    const goToAuth=()=>{
        navigate('/TrackAuth')
    }
    const tostershow = () => {
      // Show toast message
      toast.success('OTP sent successfully!', {
        position: "bottom-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      // Navigate to dashboard after a delay (adjust as needed)
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 3000);
    }
  
  const openExcel = () => {
    // Create a link element, set the href to the file path, and trigger the download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Tracking_Report.xlsx";
    link.setAttribute("download", "Tracking_Report.xlsx"); // Optional: you can set the download attribute to a custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const mapStyles = {
    height: "100%",
    width: "100%",
    border: "10px",
  };

  const defaultCenter = {
    lat: 20.5937,
    lng: 78.9629, // coordinates for India
  };

  return (
    <div className="bg-gradient-to-tr relative from-white to-green-400 h-screen flex justify-center items-center">
      <div className=" w-5/6 pt-4  scale-90  ">
        <div className="flex h-content bg-gradient-to-tr from-white to-green-400 w-full gap-4 mt-16 ">
          {/* Content */}
          <div className="bg-white w-1/2 ml-5 rounded-lg p-4 shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Trip ID - TSL-XXXXXX</h2>
              <p className="text-gray-700">TSL: 123345</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-700">Vehicle Number</p>
                <input
                  type="text"
                  className="bg-gray-200 rounded-2xl px-5 py-1 outline-none"
                  placeholder="XXXXXX"
                  disabled
                />
              </div>
              <div>
                <p className="text-gray-700">Driver Name</p>
                <input
                  type="text"
                  className="bg-gray-200 rounded-2xl px-5 py-1 outline-none"
                  placeholder="XXXXXX"
                  disabled
                />
              </div>
            </div>
           
            <div className="border-t border-gray-200 pt-4 mb-4 flex flex-col gap-5">
              <div className="flex justify-around">
                <p className="text-gray-700">Source</p>
                <p className="text-gray-700">Destination</p>
              </div>
              <div className="flex gap-24 pl-5 ml-5">
                <p className="text-black text-sm font-bold max-w-[200px]">
                  Chinsurah - Magra, Hooghly District, West Bengal, India
                </p>
                <p className="text-black text-sm font-bold">
                  New Delhi, Delhi, India
                </p>
              </div>
              <p className="text-black">
                Last Location: 10 Jan 11:49 AM:Aurangabad District, Bihar, India
              </p>
            </div>
            {/* ... rest of the content ... */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-black">Created at: 09 Jan 12:41 PM</p>
              <p className="text-green-500">Status: RUNNING</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-700">Total Distance: 1419 km</p>
              </div>
              <div>
                <p className="text-gray-700">Distance Travel: 442 km</p>
              </div>
              <div>
                <p className="text-gray-700">Average Km/hr: 16.3 km</p>
              </div>
              <div>
                <p className="text-gray-700">ETA: XXX</p>
              </div>
              <div>
                <p className="text-gray-700">ETD: XXX</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Remarks/Delay Reason: Fuel Shortage, heavy rain etc.
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-green-400 text-white rounded px-4 py-2">
                Timeline
              </button>
              <button
                className="bg-green-400 text-white rounded px-4 py-2"
                onClick={openExcel}
              >
                Download Report
              </button>
              <button className="bg-green-400 text-white rounded px-4 py-2">
                Save
              </button>
              <Link to={"/Documentlibrary"}>
              <button className="bg-green-400 text-white rounded px-4 py-2">
                Close
              </button>
              </Link>
            </div>
          </div>

          {/* Map Container */}
          <div className="bg-white w-1/2 mr-5 rounded-lg  ">
            <img src={Map} className="h-full"/>
            {/* <MapContainer
              center={defaultCenter}
              zoom={8}
              style={{ ...mapStyles, borderRadius: "0 10px 10px 0" }}
            > */}
              {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              /> */}
              {/* Example Marker */}
              {/* <Marker position={defaultCenter}>
                <Popup>Your Location</Popup>
              </Marker> */}
            {/* </MapContainer> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Trip;
