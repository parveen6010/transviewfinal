import React, { useState } from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Verify() {
    const [slectpart, setslectpart] = useState("Select Item");

    const handleChange = (e) => {
        setslectpart(e.target.value);
    };

    const navigate = useNavigate();

    const tempgo = () => {
        navigate("/pdffill");
    }

    return (
        <div className="bg-gradient-to-tr from-white to-green-400 h-screen flex justify-center items-center">
            <form action="" className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white border-2 rounded-md shadow-2xl shadow-gray-300">
                <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
                Have a Look At Your Document
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
                {slectpart ? (
                                    <p className="text-gray-400 mb-4 text-lg">{slectpart}</p>
                ):(
                    <p className="text-gray-400 mb-4 text-lg">Select Item</p>

                )}
                
                <div className="bg-gray-200 lg:w-[50%] mb-4 flex flex-row w-1/3 rounded-md">
                    <select onChange={(e) => setslectpart(e.target.value)} className="bg-gray-200 lg:w-[30%] p-2 lg:font-semibold rounded-md outline-none border-transparent">
                        <option>E-Way-Bill</option>
                        <option>TSL .No</option>
                        <option>Status</option>
                    </select>
                    <MdOutlineConfirmationNumber className="text-gray-400 mr-4 mt-3" />
                    <input
                        type="number"
                        className="bg-gray-200 outline-none text-sm flex-1"
                        name="EwayBillNum"
                        placeholder={slectpart}
                    />
                </div>
                <div className="flex flex-row justify-evenly w-full pb-5">
                    <button
                        type="button"
                        className="border-2 border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
                        onClick={tempgo}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Verify;