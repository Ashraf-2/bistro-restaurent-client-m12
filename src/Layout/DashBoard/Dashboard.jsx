import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div className="flex ">
            {/* side bar of the dashboard */}
            <div className="w-72 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/manageBookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUser></FaUser>
                                    All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/orderFood/salad">
                                        <FaSearch></FaSearch>
                                        Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/orderFood/contact">
                                        <FaEnvelope></FaEnvelope>
                                        Contact</NavLink>
                                </li>
                            </>
                    }
                    {/* user specific content */}

                    <div className="divider"></div>
                    {/* same for everyone */}

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;