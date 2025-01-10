import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },{
      path: "/browse",
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName} = user;
        console.log(uid, email, displayName);
        dispatch(addUser({uid :uid, email: email, displayName: displayName}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  })

    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
};


export default Body;