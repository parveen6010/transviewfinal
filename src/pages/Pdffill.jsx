import React, { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "../components/qr-code.png"; // Import the QR code image

const Pdffill = () => {
  const [slectpart, setslectpart] = useState("Select");
  const [doc,setDoc]=useState("select");
  const [pdffram, setpdffram] = useState("");

  const functionset = () => {
    if (slectpart === "Green From") {
      setpdffram("greenFormPdf(.pdf");
    } else if (slectpart === "TSL") {
      setpdffram("ewaygmn(.pdf");
    } else if (slectpart === "DPOD") {
      setpdffram("pg.pdf");
    } else if (slectpart === "GMN") {
      setpdffram("ewaygmn(_.pdf");
    } else if (slectpart === "Select") {
      setpdffram("");
    } else if (slectpart === "viewAll") {
      setpdffram("AllDoc.pdf");
    }
  };

  const handleChange = (e) => {
    setslectpart(e.target.value);
  };
  const handleDocChange=(e)=>{
    setDoc(e.target.value);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-white to-green-400">
      <div className="lg:justify-between mt-10 border-solid border-2 p-3 flex gap-2 rounded-lg bg-white h-[85%] lg:mt-[5%] w-[1500px]">
        <div className="lg:w-[40%]  flex flex-col gap-5 justify-center items-center">
          <div className="lg:flex lg:flex-col lg:h-full lg:justify-evenly lg:w-[100%]  p-5 overflow-y-auto">
            <div className="flex h-[20%] w-[90%] justify-evenly items-center">

              <select onChange={(e) => setDoc(e.target.value)} className="bg-gray-200 lg:w-[50%] p-2 lg:font-semibold rounded-md outline-none border-transparent">
                <option value="EWayBill">E-Way Bill Number</option>
                <option value="Gr">Gr Number</option>
                <option value="Tsl">TSL Number</option>
                <option value="invoice">Invoice Number</option>
                <option value="dpod">DPOD Number</option>
                <option value="gmn">GMN Number</option>
              </select>
              <input
                type="text"
                placeholder="enter document number"
                className="outline p-2 rounded-md"
              />
            </div>
            <div className="flex h-[80%] flex-col justify-evenly items-center">
              <select
                onClick={functionset}
                onChange={(e) => setslectpart(e.target.value)}
                className="bg-gray-200 lg:w-[50%] p-2 lg:font-semibold rounded-md outline-none border-transparent"
              >
                <option>Select</option>
                <option>Green From</option>
                <option>TSL</option>
                <option>DPOD</option>
                <option>GMN</option>
                <option value="viewAll">View All</option>
              </select>
              {slectpart==="TSL" &&
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={QRCode}
                    alt="QR Code"
                  />
                </div>
              </div>
              }
              <Link to={"/dashboard"}>
                <button
                  type="submit"
                  className="border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-9 py-2 inline-block font-semibold"
                >
                  close
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 border-solid border-5 overflow-hidden w-[700px] border-2xl border-green-700 flex justify-center items-center">
          {pdffram ? (
            <iframe
              title="PDF Viewer"
              src={pdffram}
              className="h-[110%] w-full overflow-hidden border-2xl border-green-700"
            ></iframe>
          ) : (
            <button
              type="submit"
              className={`border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-9 py-2 inline-block font-semibold ${
                slectpart === "Select" ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              Preview
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pdffill;
