
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import RoomDetails from "../components/RoomDetails/RoomDetails";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/room/:id",
                element:<RoomDetails/>
            }
        ]
    }
])

export default Router;