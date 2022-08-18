import {
    FaUserTie,
    FaUserSecret,
    FaEye,
    FaEyeSlash,
    FaGlasses
} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useState } from 'react';

import * as authService from '../../services/authService';
import ErrorDiv from '../Error/ErrorDiv';
import styles from './SignIn.module.css';


const SignIn = () => {
    const { login } = useAuthContext();
    let historyHook = useHistory();
    let [message, setMessage] = useState("");


    const handleLoginSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login({ email, password })
            .then((authData) => {
                login(authData);
                historyHook.push('/home')
                setMessage("");

            })
            .catch(err => {
                setMessage(err.message);
                console.log("error in sign in")
                console.log(err);
            });
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        let { email, username, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget));
        if (password !== repeatPassword) {
            return setMessage("Passwords don't match");
        }
        authService.register({ email, username, password, repeatPassword })
            .then(authData => {
                console.log(authData);
                login(authData);
                setMessage("");
                historyHook.push('/home')

            })
            .catch(err => {
                setMessage(err.message);

            })
    }
    let [eye, setEye] = useState(true);

    const handleEye = (e) => {
        const eyeInput = e.currentTarget.parentNode.querySelector('input');
        eyeInput.type = eye ? 'text' : 'password';
        setEye(prev => eye = !prev)
    }

    const [show, setShow] = useState("show");


    return (

        <div className={styles.singin}>

            <video autoPlay={true} loop>
                <source src="/images/video3.mp4" type="video/mp4" />
            </video>
            <ErrorDiv err={{ message, shouldShow: (message.length > 0 ? true : false) }} />


            <div className={`${styles['form-container']} ${styles['sign-in-form']} ${show === "show" ? styles.show : styles.hide}`}>
                <div className={`${styles['form-box']} ${styles["sign-in-box"]}`}>
                    <h2>Sign in</h2>
                    <form onSubmit={handleLoginSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <FaUserTie className={styles.icon} />
                            <input type="email" name="email" placeholder="Email ID" required />
                        </div>

                        <div className={styles.field}>
                            <FaGlasses className={styles.icon} />

                            <input className="password-input" name="password" type="password" placeholder="Password" required />
                            <div className={styles['eye-btn']} onClick={handleEye}>
                                {eye === true
                                    ? <FaEye className={`${styles.icon} ${styles.eye}`} />
                                    : <FaEyeSlash className={`${styles.icon} ${styles.eyeslash}`} />
                                }

                            </div>
                        </div>

                        <input type="submit" className={styles.btn} value="Sign in" />
                    </form>
                </div>
                <div className={`${styles.imgBox} ${styles["sign-in-imgBox"]}`}>
                    <div className={styles['sliding-link']}>
                        <p>Don't have an account?</p>
                        <span className="sign-up-btn" onClick={() => setShow("hide")}>Sign up</span>
                    </div>
                    <img src="/images/signin-img.png" alt="" />
                </div>
            </div>


            <div className={`${styles['form-container']} ${styles['sign-up-form']}  ${show === "show" ? styles.hide : styles.show}`}>
                <div className={`${styles.imgBox} ${styles["sign-up-imgBox"]}`}>
                    <div className={styles['sliding-link']}>
                        <p>Already a member?</p>
                        <span className="sign-in-btn" onClick={() => setShow("show")}>Sign in</span>
                    </div>
                    <img src="/images/signup-img.png" alt="" />
                </div>
                <div className={`${styles['form-box']} ${styles["sign-up-box"]}`}>
                    <h2>Sign up</h2>

                    <form onSubmit={handleRegisterSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <FaUserTie className={styles.icon} />
                            <input type="email" name="email" placeholder="Email ID" required />
                        </div>
                        <div className={styles.field}>
                            <FaUserSecret className={styles.icon} />
                            <input type="text" name="username" placeholder="Username" required />
                        </div>

                        <div className={styles.field}>
                            <FaGlasses className={styles.icon} />
                            <input type="password" name="password" placeholder="Password" required />

                        </div>
                        <div className={styles.field}>
                            <FaGlasses className={styles.icon} />

                            <input className="password-input" name="repeatPassword" type="password" placeholder="Confirm Password" required />

                        </div>

                        <input type="submit" className={styles.btn} value="Sign up" />


                    </form>
                </div>

            </div>
        </div>

    );
}

export default SignIn;