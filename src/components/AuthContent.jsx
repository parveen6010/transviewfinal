import React from "react";

function AuthContent({isSignUp,setIsSignUp}) {
  const handleChange = () => {
    setIsSignUp(!isSignUp)
  }
  return (
    <div >
      <h2 className="text-3xl font-bold mb-2">Hello,Friend</h2>
      <div className="border-2 w-10 border-white inline-block mb-2"></div>
      {isSignUp ? (
        <p className="mb-2">
          Fill up your personal details and start journey with us
        </p>
      ) : (
        <p className="mb-2">
          Welcome back! Please sign in to continue.
        </p>
      )}
      <button
        onClick={handleChange}
        className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
      >
        {isSignUp ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}

export default AuthContent;

