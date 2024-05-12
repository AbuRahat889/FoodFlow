import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Sign Up/SignUp";
import Details from "../Pages/Details/Details";
import AvailableFoods from "../Pages/Available Foods/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Add Food/AddFood";



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
                path:'/details/:id',
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/availablefoods',
                element:<AvailableFoods></AvailableFoods>
            },
            {
                path:'/addfood',
                element:<AddFood></AddFood>
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