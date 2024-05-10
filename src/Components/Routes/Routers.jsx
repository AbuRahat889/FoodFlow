import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Sign Up/SignUp";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])

const Routers = () => {
    return (
        <div>
            
        </div>
    );
};

export default router;