import React, { useState } from "react";

function Temp() {
  const [signIn, toggle] = useState(true);
  return (
    <div className="container bg-white rounded-lg shadow-lg relative overflow-hidden w-678 max-w-full min-h-400">
      <div className={signIn ? "signUpContainer transition-all duration-600 ease-in-out absolute top-0 h-full left-0 w-1/2 opacity-0 z-10 transform translate-x-full" : "signUpContainer transition-all duration-600 ease-in-out absolute top-0 h-full left-0 w-1/2 opacity-100 z-20"}>
        <form className="form bg-white flex items-center justify-center flex-col p-12 h-full text-center">
          <h1 className="title font-bold text-lg">Create Account</h1>
          <input type="text" placeholder="Name" className="input bg-gray-200 border-none p-3 m-2 w-full" />
          <input type="email" placeholder="Email" className="input bg-gray-200 border-none p-3 m-2 w-full" />
          <input type="password" placeholder="Password" className="input bg-gray-200 border-none p-3 m-2 w-full" />
          <button className="button rounded-full border-solid border-2 border-red-700 bg-red-700 text-white text-sm font-bold p-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in active:scale-95 focus:outline-none">Sign Up</button>
        </form>
      </div>
      <div className={signIn ? "signInContainer transition-all duration-600 ease-in-out absolute top-0 h-full left-0 w-1/2 z-20" : "signInContainer transition-all duration-600 ease-in-out absolute top-0 h-full left-0 w-1/2 z-10 transform translate-x-full"}>
        <form className="form bg-white flex items-center justify-center flex-col p-12 h-full text-center">
          <h1 className="title font-bold text-lg">Sign in</h1>
          <input type="email" placeholder="Email" className="input bg-gray-200 border-none p-3 m-2 w-full" />
          <input type="password" placeholder="Password" className="input bg-gray-200 border-none p-3 m-2 w-full" />
          <a href="#" className="anchor text-gray-700 text-sm underline mt-4 mb-8">Forgot your password?</a>
          <button className="button rounded-full border-solid border-2 border-red-700 bg-red-700 text-white text-sm font-bold p-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in active:scale-95 focus:outline-none">Sign In</button>
        </form>
      </div>
      <div className={signIn ? "overlayContainer transition-all duration-600 ease-in-out absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-30" : "overlayContainer transition-all duration-600 ease-in-out absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-30 transform translate-x-full"}>
        <div className={signIn ? "overlay transition-all duration-600 ease-in-out bg-gradient-to-r from-red-700 to-pink-600 bg-repeat-no-repeat bg-cover bg-0-0 text-white relative left-full h-full w-2/1 transform translate-x-0" : "overlay transition-all duration-600 ease-in-out bg-gradient-to-r from-red-700 to-pink-600 bg-repeat-no-repeat bg-cover bg-0-0 text-white relative left-full h-full w-2/1 transform translate-x-1/2"}>
          <div className={signIn ? "leftOverlayPanel transition-all duration-600 ease-in-out absolute flex items-center justify-center flex-col p-16 text-center top-0 h-full w-1/2 transform translate-x-0" : "leftOverlayPanel transition-all duration-600 ease-in-out absolute flex items-center justify-center flex-col p-16 text-center top-0 h-full w-1/2 transform translate-x-full"}>
            <h1 className="title font-bold text-lg">Welcome Back!</h1>
            <p className="paragraph text-sm font-light leading-5 tracking-wide my-8">To keep connected with us please login with your personal info</p>
            <button onClick={() => toggle(true)} className="ghostButton rounded-full border-solid border-2 border-white bg-transparent text-white text-sm font-bold p-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in active:scale-95 focus:outline-none">Sign In</button>
          </div>
          <div className={signIn ? "rightOverlayPanel transition-all duration-600 ease-in-out absolute flex items-center justify-center flex-col p-16 text-center right-0 h-full w-1/2 transform translate-x-full" : "rightOverlayPanel transition-all duration-600 ease-in-out absolute flex items-center justify-center flex-col p-16 text-center right-0 h-full w-1/2 transform translate-x-0"}>
            <h1 className="title font-bold text-lg">Hello, Friend!</h1>
            <p className="paragraph text-sm font-light leading-5 tracking-wide my-8">Enter your personal details and start journey with us</p>
            <button onClick={() => toggle(false)} className="ghostButton rounded-full border-solid border-2 border-white bg-transparent text-white text-sm font-bold p-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in active:scale-95 focus:outline-none">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Temp



