import React, { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function DocUpload() {
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);
  const fileInput4 = useRef(null);
  const [grUploaded, setGrUploaded] = useState(0);
  const [invoiceUploaded, setInvoiceUploaded] = useState(false);
  const [cnt,setCnt]=useState(1);

  const [canview, setcanview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const handleClick = (fileInput, setUploaded,num , ind) => {
    fileInput.current.click();
    if((num===0 && ind===0) || (num===1 && ind===0))setGrUploaded(grUploaded+1);
  };
  const isDisabled = () => {
    return grUploaded<2;
  };
  const setcanviewfunction = () => {
    setcanview(true);
  };
  const handleAdd=()=>{
    if(cnt<5)setCnt(cnt+1);
  }

  return (
    <div className="bg-gradient-to-tr from-white to-green-400  h-screen flex justify-center items-center mt-10">
      <div className="flex flex-row  w-[85%] h-[85%] bg-white rounded-md shadow-sm shadow-gray-300">
        <div className="h-full w-1/2  mt-4 ml-4 mb-4 border-solid border-5  overflow-hidden border-2xl border-green-700">
          {canview ? (
            <iframe
              title="PDF Viewer"
              src="ewaygmn(_.pdf"
              className="h-[95%] w-full overflow-hidden border-2xl border-green-700"
            ></iframe>
          ) : (
            <button
              type="submit"
              disabled={isDisabled()}
              className={`border-2  rounded-full px-12 py-2 inline-block font-semibold mt-10 mb-4 lg:mt-[40%] lg:ml-[40%]   ${
                !isDisabled()
                  ? "text-white bg-green-700 hover:bg-green-700 border-green-700"
                  : "text-white bg-green-300 border-green-300 cursor-not-allowed"
              }`}
              onClick={setcanviewfunction}
            >
              Preview
            </button>
          )}
        </div>
        <div className="p-8 flex flex-col justify-center items-center w-1/2 h-full   rounded-md shadow-sm shadow-gray-300">
          <div className="h-[10%] flex flex-col items-center p-2 mb-2">
          <h2 className="text-3xl font-bold text-green-500 mb-2">DocuVault</h2>
          <div className="border-2 w-10 border-green-500 inline-block mb-5 "></div>
          </div>
          {/* <div className="flex flex-col h-2/3  w-100 ">
          <div className="flex gap-20">
            <h3 className="ml-10 text-gray-500 text-lg font-bold ">GR<span className="text-red-500 ml-1 text-lg"></span></h3>
            <h3 className="ml-10 text-gray-500 text-lg font-bold ">Invoice<span className="text-red-500 ml-1 text-lg"></span></h3>
          </div>
         
          <div className="  flex justify-around items-center h-1/2">
            <div className="m-4  border-4 border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput1} style={{ display: 'none' }} required/>
              <FiPlusCircle onClick={() => handleClick(fileInput1)} className="text-3xl text-gray-400"/>
            </div>
            <div>
               <div className=" m-4 border-4 border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput2} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput2)} className="text-3xl text-gray-400"/>
            </div>
            </div>
           
          </div>
          <div className="flex justify-around items-center h-1/2">
            <div className="m-4 border-4  border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput3} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput3)} className="text-3xl text-gray-400"/>
            </div>
            <div className="m-4 border-4  border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput4} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput4)} className="text-3xl text-gray-400"/>
            </div>
          </div>
        </div> */}
          <div className="flex flex-col h-[80%]  w-full justify-between">
            <div className="h-1/3 w-full  flex flex-col">
              <h3 className="text-xl font-bold">Upload GR </h3>
              
              <div className="h-[70%] w-full flex flex-col overflow-auto p-5">
              {Array.from({ length: cnt }).map((_, index) => (
              <div className="flex  w-full justify-start items-center">
                <input
                  type="text"
                  placeholder="Enter GR Number"
                  className="outline"
                />
                <div className="flex items-center justify-start">
                <div className="m-4 border-4  border-dashed border-green-400 p-2 flex items-center justify-start">
                  <input
                    type="file"
                    ref={fileInput1}
                    style={{ display: "none" }}
                  />
                  <FiPlusCircle
                    onClick={() => handleClick(fileInput1, setGrUploaded , 0 , index)}
                    className="text-3xl text-gray-400"
                  />
                </div>
                { index==cnt-1 && cnt<5 && 
                <IoAddCircleSharp
                    className="text-2xl text-green-400"
                    onClick={handleAdd}
                  />
                }
                </div>

              </div>
                    ))}
            </div>
            </div>
            <div className="h-1/3 w-full  flex flex-col">
              <h3 className="text-xl font-bold">Upload Invoice Copy </h3>
              
              <div className="h-[70%] w-full flex flex-col overflow-auto p-5">
              {Array.from({ length: cnt }).map((_, index) => (
              <div className="flex  w-full justify-start items-center">
                <input
                  type="text"
                  placeholder="Enter Invoice Number"
                  className="outline"
                />
                <div className="flex items-center justify-start">
                <div className="m-4 border-4  border-dashed border-green-400 p-2 flex items-center justify-start">
                  <input
                    type="file"
                    ref={fileInput2}
                    style={{ display: "none" }}
                  />
                  <FiPlusCircle
                    onClick={() => handleClick(fileInput2, setGrUploaded,1,index)}
                    className="text-3xl text-gray-400"
                  />
                </div>
                </div>

              </div>
                    ))}
            </div>
            </div>
           
            
            <div className="h-1/3 w-full flex flex-col">
              <h3 className="text-xl font-bold">Upload Additional Documents</h3>
              <div className="flex ">
                <div className="flex w-full items-center">
                  <div className="m-4 border-4  border-dashed border-green-400 p-2 flex items-center justify-center">
                    <input
                      type="file"
                      ref={fileInput3}
                      style={{ display: "none" }}
                    />
                    <FiPlusCircle
                      onClick={() => handleClick(fileInput3)}
                      className="text-3xl text-gray-400"
                    />
                  </div>

                </div>
                <div className="flex w-full items-center">
                  <div className="m-4 border-4  border-dashed border-green-400 p-2 flex items-center justify-center">
                    <input
                      type="file"
                      ref={fileInput3}
                      style={{ display: "none" }}
                    />
                    <FiPlusCircle
                      onClick={() => handleClick(fileInput3)}
                      className="text-3xl text-gray-400"
                    />
                  </div>

                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col items-center">
           <p className="text-red-600">file type : PDF , Max File Size 2 MB</p>
      
          <Link to={"/temp23"}>
            <button className=" border-2 my-5  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold">
              Submit
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DocUpload;

/*<div className="m-4 border-4  border-dashed border-green-400 p-12 flex items-center justify-center">
<input type="file" ref={fileInput3} style={{ display: 'none' }} />
<FiPlusCircle onClick={() => handleClick(fileInput3)} className="text-3xl text-gray-400"/>
</div>*/
