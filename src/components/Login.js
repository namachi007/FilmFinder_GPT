import Header from "./Header";
import { useState } from "react";

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
return (
  <div>
    <Header />
    <div className=" relative w-full  overflow-hidden h-screen">
      <img
        className=" h-full w-full "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg 959w"
        alt=""
        aria-hidden="true"
        class="default-ltr-cache-19j6xtr"
      ></img>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/90"></div>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
      <div className="bg-black/60 p-10 rounded-md  w-full flex flex-col justify-center items-center ">
        <form className="flex flex-col items-center w-full">
          <h1 className="text-white font-bold text-3xl my-4">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          { !isSignIn && <input
            placeholder="Full Name"
            type="name"
            className="border border-slate-700 p-3 mt-4 mb-2 rounded-md w-72"
          ></input>}
          <input
            placeholder="Email"
            type="email"
            className="border border-slate-700 p-3 my-2 rounded-md w-72"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="border border-slate-700 p-3 my-2 rounded-md w-72"
          ></input>
        </form>
        <button className="border border-red-600  h-9 text-white font-semibold bg-red-600 rounded-md mt-5 w-72">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="font-medium text-gray-400 my-10 ">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className=" text-white cursor-pointer "
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign up now." : "Sign In."}{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  </div>
);
};

export default Login;