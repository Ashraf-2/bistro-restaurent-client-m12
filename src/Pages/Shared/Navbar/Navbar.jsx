import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    console.log("isadmin: ", isAdmin);
    const [cart] = useCart();


    const handleLogOut = () => {
        logOut()
            .then(res => console.log("log out successfully!"))
            .catch(error => console.log(error))
    }

    const navOptions =
        <>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/menu">Our Menu</Link> </li>
            <li> <Link to="/orderFood/salad">Order Food</Link> </li>
            <li>
                <Link to="/dashboard/cart">
                    <FaCartPlus className="text-lg"></FaCartPlus>

                    <div className="badge badge-secondary">+{cart.length}</div>
                </Link>
            </li>
            {
                user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link> </li>
            }
            {
                user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link> </li>
            }

        </>
    return (

        <div className="navbar fixed z-10 bg-slate-500 bg-opacity-60 max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link><button className="btn btn-ghost text-xl">Bistro Boss</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center">

                            <p>{user.email}</p>
                            <button onClick={handleLogOut} className="btn btn-ghost">Log out</button>
                        </div>
                        :
                        <div>
                            <Link to="/login" className="btn btn-ghost">Login</Link>
                            <Link to="/singUp" className="btn btn-ghost">Sign Up</Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;