import React from 'react'
import SignUp from '../components/Signup'
import Login from '../components/Login'
import AuthContent from '../components/AuthContent'
import '../css/Homepage.css'
import { useState } from 'react'

function HomePage({loginData, setLoginData}) {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <div className=" bg-gradient-to-tr from-white to-green-400  flex flex-col items-center justify-center w-screen flex-1 p-[8.5rem] h-[100vh] text-center z-30">
            <div className=' bg-white rounded-2xl shadow-2xl flex justify-center items-centre w-3/4 h-3/4'>
                <div className={`transition-all duration-500 ease-in-out  ${isSignUp ? 'w-3/5 flex flex-col justify-center items-center' : ' w-2/5  bg-green-500 text-white rounded-2xl py-36 px-12 flex flex-col justify-center items-center'}`}>
                    {/* */}
                    <h2 className={`${isSignUp ?'text-3xl font-bold text-green-500 mb-2 mt-4' :'hidden' }`}>Create Your Account</h2>
                    <div className= {`${isSignUp ?'border-2 w-10 border-green-500 inline-block mb-10' :'hidden' }`}></div>
                    <div className='flex justify-center items-center'>
                        {isSignUp ? <SignUp isSignUp={isSignUp}  setIsSignUp={setIsSignUp}/> :  <AuthContent isSignUp={isSignUp}  setIsSignUp={setIsSignUp} />}
                    </div>
                </div>
                <div className={`transition-all duration-500 ease-in-out ${isSignUp ? 'content w-2/5 p-5 bg-green-500 text-white rounded-2xl  py-36 px-12 flex justify-center items-center' : 'w-3/5 p-5 flex justify-center items-center'}`}>
                   {isSignUp ?  <AuthContent isSignUp={isSignUp}  setIsSignUp={setIsSignUp} /> : <Login loginData={loginData} setLoginData={setLoginData}/>}
                </div>
            </div>
        </div>
    )
}

export default HomePage
