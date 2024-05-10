import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/HomePage/Home";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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