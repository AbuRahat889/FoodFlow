import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Sign Up/SignUp";
import Details from "../Pages/Details/Details";
import AvailableFoods from "../Pages/Available Foods/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Add Food/AddFood";
import MyFood from "../Pages/My Food/MyFood";
import Update from "../Pages/Update Page/Update";
import FoodRequest from "../Pages/Food Request/FoodRequest";



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
                loader: ({params})=> fetch(`${import.meta.env.VITE_SITE_Link}/food/${params.id}`)
            },
            {
                path:'/availablefoods',
                element:<AvailableFoods></AvailableFoods>
            },
            {
                path:'/addfood',
                element:<PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path:'/myfood',
                element:<PrivateRoute>
                    <MyFood></MyFood>
                </PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_SITE_Link}/food/${params.id}`)
            },
            {
                path:'/request',
                element:<PrivateRoute>
                    <FoodRequest></FoodRequest>
                </PrivateRoute>,
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