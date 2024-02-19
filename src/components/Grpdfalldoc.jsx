import React from 'react';
import { useNavigate } from 'react-router-dom';

const Grpdfalldoc = () => {
  const navigate = useNavigate();
  
  const Ewaybillgrpalldocgo = () => {
    navigate("/Ewaybillgrpalldoc");
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-tr from-white to-green-400 '>
      <div className=' mt-10 border-solid border-2 p-3 flex gap-2 rounded-lg bg-white h-3/4 w-[1040px]' >
       
        <div className='mt-4 mb-4 border-solid border-5  overflow-hidden w-[700px] border-2xl border-green-700'>
          <iframe title="PDF Viewer" src="grdoc.pdf" className='h-[110%] w-full overflow-hidden border-2xl border-green-700'></iframe>
        </div>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <div className=' p-5 overflow-y-auto'>
              <h1 className='text-3xl font-bold text-green-500'>GR No. 123345</h1>
            </div>
            <button
              type="submit"
              className='border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-9 py-2 inline-block font-semibold'
              onClick={Ewaybillgrpalldocgo}
              >
              
              Submit
            </button>
        </div>
        
      </div>
    </div>
  );
}

export default Grpdfalldoc;




