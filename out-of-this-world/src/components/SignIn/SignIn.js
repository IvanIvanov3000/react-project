import './SignIn.css';

const SignIn = () => {

    return (

        <div className="hero signin">

            <video autoPlay={true} >
                <source src="/images/video3.mp4" type="video/mp4" />
            </video>



            <div className="form-container sign-in-form hide">
                <div className="form-box sign-in-box">
                    <h2>Sign in</h2>
                    <form action="">
                        <div className="field">
                            <i className="uil uil-at"></i>
                            <input type="email" placeholder="Email ID" required />
                        </div>


                        <div className="field">
                            <i className="uil uil-lock-alt"></i>
                            <input className="password-input" type="password" placeholder="Password" required />
                            <div className="eye-btn"><i className="uil uil-eye-slash"></i></div>
                        </div>

                        <input type="submit" className="submit-btn" value="Sign in" />
                    </form>
                </div>
                <div className="imgBox sign-in-imgBox">
                    <div className="sliding-link">
                        <p>Don't have an account?</p>
                        <span className="sign-up-btn">Sign up</span>
                    </div>
                    <img src="/images/signin-img.png" alt="" />
                </div>
            </div>


            <div className="form-container sign-up-form show">
                <div className="imgBox sign-up-imgBox">
                    <div className="sliding-link">
                        <p>Already a member?</p>
                        <span className="sign-in-btn">Sign in</span>
                    </div>
                    <img src="/images/signup-img.png" alt="" />
                </div>
                <div className="form-box sign-up-box">
                    <h2>Sign up</h2>

                    <form action="">
                        <div className="field">
                            <i className="uil uil-at"></i>
                            <input type="email" placeholder="Email ID" required />
                        </div>

                        <div className="field">
                            <i className="uil uil-user"></i>
                            <input type="text" placeholder="Full name" required />
                        </div>
                        <div className="field">
                            <i className="uil uil-lock-access"></i>
                            <input type="password" placeholder="Confirm password" required />
                        </div>

                        <input type="submit" className="submit-btn" value="Sign up" />
                        

                    </form>
                </div>

            </div>
        </div>

    );
}

export default SignIn;