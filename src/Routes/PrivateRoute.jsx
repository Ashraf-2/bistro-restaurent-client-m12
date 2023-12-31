
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
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