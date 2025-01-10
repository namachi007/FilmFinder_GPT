import React from 'react'
import Header from './Header';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
}

  return (
    <div>
      <div>
        <Header />
        <div className="absolute top-2 right-10 p-4">
          <button onClick={handleSignOut} className="w-24 h-8 p-1 border-red-600 bg-red-600 cursor-pointer text-md text-white font-medium rounded-md hover:bg-red-700">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};


export default Browse;