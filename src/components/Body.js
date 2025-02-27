import Browse from "./Browse";
import Login from "./Login";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { WatchPage } from "../components/WatchPage";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },{
      path: "/browse",
      element: <Browse />
    },{
      path: "/watch",
      element: <WatchPage />
    }
  ])

  

    return (
      
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
};


export default Body;