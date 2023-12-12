import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <div className="flex flex-col items-center justify-center">
            <span className="loading loading-ring loading-lg text-center"></span>
        </div>
    }
    if(user){
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;