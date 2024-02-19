import React from 'react';
import img from "./pyimg.jpeg";

function Payment() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='border-1 border-black shadow-2xl'>
        <img style={{ height: "80vh" }} src={img} alt="Payment" />
      </div>
    </div>
  );
}

export default Payment;
