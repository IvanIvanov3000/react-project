import {
    FaUserTie,
    FaUserSecret,
    FaEye,
    FaEyeSlash,
    FaGlasses
} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';
import { useState } from 'react';

import * as authService from '../services/authService';


const SignIn = () => {
    const { login } = useAuthContext();
    let historyHook = useHistory();



    const handleLoginSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login({ email, password })
            .then((authData) => {
                login(authData);
                historyHook.push('/home')

            })
            .catch(err => {
                // TODO: show notification
                console.log("error in sign in")
                console.log(err);
            });
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        let { email, username, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register({ email, username, password, repeatPassword })
            .then(authData => {
                console.log(authData);
                login(authData);
                historyHook.push('/home')

            });
    }
    let [eye, setEye] = useState(true);

    const handleEye = (e) => {
        const eyeInput = e.currentTarget.parentNode.querySelector('input');
        eyeInput.type = eye ? 'text' : 'password';
        setEye(prev => eye = !prev)
    }

    const [show, setShow] = useState("show");


    return (

        <div className="hero signin">

            <video autoPlay={true} loop>
                <source src="/images/video3.mp4" type="video/mp4" />
            </video>



            <div className={`form-container sign-in-form ${show === "show" ? "show" : "hide"}`}>
                <div className="form-box sign-in-box">
                    <h2>Sign in</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="field">
                            <FaUserTie className="icon" />
                            <input type="email" name="email" placeholder="Email ID" required />
                        </div>


                        <div className="field">
                            <FaGlasses className="icon" />

                            <input className="password-input" name="password" type="password" placeholder="Password" required />
                            <div className="eye-btn" onClick={handleEye}>
                                {eye == true
                                    ? <FaEye className="icon eye" />
                                    : <FaEyeSlash className="icon eyeslash" />
                                }

                            </div>
                        </div>

                        <input type="submit" className="submit-btn" value="Sign in" />
                    </form>
                </div>
                <div className="imgBox sign-in-imgBox">
                    <div className="sliding-link">
                        <p>Don't have an account?</p>
                        <span className="sign-up-btn" onClick={() => setShow("hide")}>Sign up</span>
                    </div>
                    <img src="/images/signin-img.png" alt="" />
                </div>
            </div>


            <div className={`form-container sign-up-form  ${show === "show" ? "hide" : "show"}`}>
                <div className="imgBox sign-up-imgBox">
                    <div className="sliding-link">
                        <p>Already a member?</p>
                        <span className="sign-in-btn" onClick={() => setShow("show")}>Sign in</span>
                    </div>
                    <img src="/images/signup-img.png" alt="" />
                </div>
                <div className="form-box sign-up-box">
                    <h2>Sign up</h2>

                    <form onSubmit={handleRegisterSubmit}>
                        <div className="field">
                            <FaUserTie className="icon" />
                            <input type="email" name="email" placeholder="Email ID" required />
                        </div>
                        <div className="field">
                            <FaUserSecret className="icon" />
                            <input type="text" name="username" placeholder="Username" required />
                        </div>

                        <div className="field">
                            <FaGlasses className="icon" />
                            <input type="password" name="password" placeholder="Password" required />

                        </div>
                        <div className="field">
                            <FaGlasses className="icon" />

                            <input className="password-input" name="repeatPassword" type="password" placeholder="Confirm Password" required />

                        </div>

                        <input type="submit" className="submit-btn" value="Sign up" />


                    </form>
                </div>

            </div>
        </div>

    );
}

export default SignIn;