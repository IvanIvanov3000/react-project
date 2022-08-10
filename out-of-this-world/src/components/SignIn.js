import { FaUserTie, FaUserSecret, FaEye, FaEyeSlash, FaGlasses } from "react-icons/fa";

import { useState } from 'react';



const SignIn = () => {
    function handleLoginSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit on login from.');
    }
    function handleRegisterSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit on register from.');
    }
    const [show, setShow] = useState("show");

    return (

        <div className="hero signin">

            <video autoPlay={true} loop>
                <source src="/images/video3.mp4" type="video/mp4" />
            </video>



            <div className={`form-container sign-in-form ${show == "hide" ? "show" : "hide"}`}>
                <div className="form-box sign-in-box">
                    <h2>Sign in</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="field">
                            <FaUserTie className="icon" />
                            <input type="email" placeholder="Email ID" required />
                        </div>


                        <div className="field">
                            <FaGlasses className="icon" />

                            <input className="password-input" type="password" placeholder="Password" required />
                            <div className="eye-btn"><FaEye className="icon" /></div>
                        </div>

                        <input type="submit" className="submit-btn" value="Sign in" />
                    </form>
                </div>
                <div className="imgBox sign-in-imgBox">
                    <div className="sliding-link">
                        <p>Don't have an account?</p>
                        <span className="sign-up-btn" onClick={() => setShow("show")}>Sign up</span>
                    </div>
                    <img src="/images/signin-img.png" alt="" />
                </div>
            </div>


            <div className={`form-container sign-up-form  ${show == "hide" ? "hide" : "show"}`}>
                <div className="imgBox sign-up-imgBox">
                    <div className="sliding-link">
                        <p>Already a member?</p>
                        <span className="sign-in-btn" onClick={() => setShow("hide")}>Sign in</span>
                    </div>
                    <img src="/images/signup-img.png" alt="" />
                </div>
                <div className="form-box sign-up-box">
                    <h2>Sign up</h2>

                    <form onSubmit={handleRegisterSubmit}>
                        <div className="field">
                            <FaUserTie className="icon" />
                            <input type="email" placeholder="Email ID" required />
                        </div>
                        <div className="field">
                            <FaUserSecret className="icon" />
                            <input type="text" placeholder="Username" required />
                        </div>

                        <div className="field">
                            <FaGlasses className="icon" />
                            <input type="password" placeholder="Password" required />

                        </div>
                        <div className="field">
                            <FaGlasses className="icon" />

                            <input className="password-input" type="password" placeholder="Confirm Password" required />

                        </div>

                        <input type="submit" className="submit-btn" value="Sign up" />


                    </form>
                </div>

            </div>
        </div>

    );
}

export default SignIn;