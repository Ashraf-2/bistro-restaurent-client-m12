
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import UpdateItem from "../Pages/Dashboard/UpdateItems/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
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
            },
            {
                path:"/secret",
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            //only admin routes
            {
                path:"adminHome",
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: "addItems",
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>
            },
            {
                path: "updateItem/:id",
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`https://bistro-boss-server-three-nu.vercel.app/menu/${params.id}`)
            },
            {
                path: "manageBookings",
                element: <AdminRoutes> <ManageBookings></ManageBookings> </AdminRoutes>
            },
            {
                path: "users",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            
        ]
    }
]);

