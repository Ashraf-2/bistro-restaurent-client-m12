import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {console.log(error)})
    }
    return (
        <div className="text-center my-5 ">
            <button onClick={handleGoogleLogin} className="btn btn-outline w-10/12 bg-orange-400 text-white">Google Login</button>
        </div>
    );
};

export default GoogleLogin;