
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path:"/orderFood",
                element: <Order></Order>
            },
            {
                path:"/orderFood/:category",
                element: <Order></Order>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/singUp",
                element: <SignUp></SignUp>
            }
        ]
    },
]);

