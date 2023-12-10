import { useContext, useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Result } from "postcss";

const SignUp = () => {
    // const captchaRef = useRef();
    // const [disableSignUp, setDisableSignUp] = useState(true);

    const {regisertUser } = useContext(AuthContext);
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name,email, password);

        regisertUser(email,password)
        .then(res=> {
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error))

    }

    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value);
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisableSignUp(false)
    //     }
    //     else {
    //         setDisableSignUp(true);
    //     }

    // }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row">
                <div className="text-center lg:w-5/12 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum voluptate expedita.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        {/* CAPTCHA loading */}
                        {/* <div className="flex flex-col">
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input ref={captchaRef} type="text" name="captcha" placeholder="write the captch above" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-1'>Validate</button>
                        </div> */}
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-info"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;