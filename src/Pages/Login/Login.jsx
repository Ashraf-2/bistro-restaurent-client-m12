/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = () => {
    const navigate = useNavigate();
    const [disableLogin,setDisableLogin]= useState(true);

    const {user,logIn} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logIn(email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            Swal.fire({
                title: "Good job!",
                text: "Log in successfull!",
                icon: "success"
              });
            navigate('/');
        })
        .catch(error => console.log(error))
        
    }
    const handleValidateCaptcha=(e)=> {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
            setDisableLogin(false)
        }
        else{
            setDisableLogin(true);
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row">
                <div className="text-center lg:w-5/12 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum voluptate expedita.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="write the captch above" className="input input-bordered" required />
                            {/* <button  className='btn btn-outline btn-xs mt-1'>Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disableLogin} type="submit" value="Login" className="btn btn-info"></input>
                        </div>
                    </form>
                    <div>
                        <p>New Here? <Link to="/singUp"> <span className='font-bold'>Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;