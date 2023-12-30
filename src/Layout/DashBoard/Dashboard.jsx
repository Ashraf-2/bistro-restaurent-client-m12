import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="flex ">
            {/* side bar of the dashboard */}
            <div className="w-72 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <div>
                                    <h1 className="text-3xl font-bold mb-5">Bistro Boss <br /> Restaurent</h1>
                                </div>
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

                                {/* divider */}
                                <div className="divider"></div>


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
                                    <NavLink to="/">
                                        <FaEnvelope></FaEnvelope>
                                        Contact</NavLink>
                                </li>
                            </>
                            :
                            // not admin, for normal user only.
                            <>
                                <div>
                                    <h1 className="text-3xl font-bold mb-5">Bistro Boss <br /> Restaurent</h1>
                                </div>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaHome></FaHome>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        My Cart({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        My Booking</NavLink>
                                </li>

                                <div className="divider"></div>

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
                                    <NavLink to="/">
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