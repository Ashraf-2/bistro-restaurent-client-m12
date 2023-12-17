import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    }) 
                    .catch(error => console.log(error))
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div className="text-center my-5 ">
            <button onClick={handleGoogleLogin} className="btn btn-outline w-10/12 bg-orange-400 text-white">Google Login</button>
        </div>
    );
};

export default GoogleLogin;