import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import HomeHero from './hero/HomeHero';
import HomeComments from './testimonials/HomeComments'

import styles from './Home.module.css';

// images
import waveBottom from '../../assets/images/wavebottom.png';
import waveTop from '../../assets/images/wavetop.png';

import homeIntro from '../../assets/images/home-page/home-intro.png';
import arrow from '../../assets/images/home-page/arrow.png';

import service1 from '../../assets/images/home-page/service1.png';
import service2 from '../../assets/images/home-page/service2.png';
import service3 from '../../assets/images/home-page/service3.png';

import network from '../../assets/images/home-page/network.png';

// icon images

import facebook from '../../assets/images/icons/facebook-icon.png';
import instagram from '../../assets/images/icons/instagram-icon.png';
import linkedin from '../../assets/images/icons/linkedin-icon.png';
import snapchat from '../../assets/images/icons/snapchat-icon.png';
import twitter from '../../assets/images/icons/twitter-icon.png';
import whatsapp from '../../assets/images/icons/whatsapp-icon.png';






const Home = () => {

    return (
        <>
            <HomeHero />
            <section className={styles.about}>
                <h2>About us</h2>

                <p>Nothing really don't read it if you don't want to. Just explore and scroll.
                </p>
                <p>This website is a small project created by one single person. everything you see here is a hard work done for many, many hours.
                    Please don't be rude. We don't support rude behavior and people and if you are you will be banned.
                </p>
                <p>This website gives you the opportunity to share your own personal films or other that aren't yours.
                    If you want to comment or to post a movie you have to be logged in first.
                </p>
                <p>If you want to see more things made by us just go to <a href='https://github.com/IvanIvanov3000'>Github</a> to see more
                    (this is only for people who understand programming, later easier to understand web page will be linked).
                </p>
                <p>This website uses React. React is a JavaScript library for building user interfaces.
                    React makes it painless to create interactive UIs.
                    Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                    This application is small and doen't use many comments but in larger applications React is very usefull. The server that runs this application is written using mainly express, mongoose and jwt.
                    All off those are very usefull libraries which provide you with usefull functionallities and techniques. The main use of the server is to save and get data from the data base(this is what most of the servers do by the way).
                    It gets, creates, edits and deletes and you will see all of these functions and methods in this application. If you want to learn more you can always serch the internet but first explore our website please.
                    Last but not least, all of the images that this application uses are not mine. They are just links to other images on the internet or are just downloaded locally(so plese don't sue me its only for studies).
                </p>
            </section>

            <section className={styles.banner}>
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles['banner-div']}>
                            <p className={styles["promo-title"]}>OUT OF THIS WORLD</p>
                            <p>This is one of the best sites out there that you can explore new movies and post. You can view, edit. login and so much more. Why don't you give us a try.</p>
                            <img className={styles.arrow} src={arrow} alt="" />Scroll to see more
                        </div>
                        <div className={styles['banner-div']}>
                            <img src={homeIntro} className={`image-fluid ${styles.img}`} alt="" />
                        </div>
                    </div>
                </div>
                <img src={waveBottom} alt="" className={styles.bottomWave} />
            </section>
            
            <section className={styles.services}>
                <div className="container text-center">
                    <h1 className={styles.title}>WHAT WE DO?</h1>
                    <div className="row text-center">
                        <div className="col-md-4 service">
                            <img src={service1} className={styles.serviceImg} alt="" />
                            <h4>We listen to you</h4>
                            <p>You cant tell us what you like or what you don't like by commenting on out blog page. After that your comment will be read by our moderators and we will discuss if we should change something in out website.</p>
                        </div>
                        <div className="col-md-4 service">
                            <img src={service2} className={styles.serviceImg} alt="" />
                            <h4>No ads</h4>
                            <p>We want to privide you with the best experience possible so we include no unnecessary ads, no pop ups, no cookies. You can discuss and explore our movies.</p>
                        </div>
                        <div className="col-md-4 service">
                            <img src={service3} className={styles.serviceImg} alt="" />
                            <h4>We provide</h4>
                            <p>We provide to you with the opportunity to login, register to post a movie, edit it, delete it. We let you have your own space and profile that you can edit. You can also comment and the stuff that you don't like will be changed.</p>
                        </div>
                    </div>
                    
                </div>

            </section>
            
            <section className={styles["about-us"]}>
                <img src={waveTop} alt="" className={styles.topWave} />
                <div className="container">
                    <h1 className="title text-center">Why choose us?</h1>
                    <div className="row">
                        <div className="col-md-6 about-us">
                            <p className={styles['about-title']}>Why we are different</p>
                            <ul>
                                <li>We don't have any ads</li>
                                <li>We provide to you many functionallities</li>
                                <li>We don't make you wait</li>
                                <li>We protect you online reputation</li>
                                <li>Believe in doing business with honesty</li>
                                <li>We give you the opportunity to freely do stuff</li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src={network} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <img src={waveBottom} alt="" className={styles.bottomWave} />

            </section>
            
            <HomeComments />
            
            <section className={styles["social-media"]}>
                <img src={waveTop} alt="" className={styles.topWave} />

                <div className="container text-center">
                    <p>Find us on social media</p>

                    <div className={styles["social-icons"]}>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                        <a href="https://twitter.com/?lang=bg"><img src={twitter} alt="" /></a>
                        <a href="https://www.whatsapp.com/"><img src={whatsapp} alt="" /></a>
                        <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                        <a href="https://www.snapchat.com/"><img src={snapchat} alt="" /></a>

                    </div>
                </div>
                <img src={waveBottom} className={styles.bottomWave} alt="" />


            </section>
            
            <footer>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-4 ${styles["footer-box"]}`}>
                             {/* <img src={logo} className={styles.footerLogo} alt="" />  */}
                            <p>This website is created entity by ivan_ivanov_3000@abv.bg. If you like it please visit other of my websites( there are none yet) I don't own any of these photos they are either stolen or free.
                            </p>
                        </div>
                        <div className={`col-md-4 ${styles["footer-box"]}`}>
                            <p><b>Contact us</b></p>
                            <p><FaMapMarkerAlt className={styles.icon} /> World Trade Center, Sofia</p>
                            <p><FaPhoneAlt className={styles.icon} /> +1 01233435667</p>
                            <p><FaEnvelope className={styles.icon} /> ivan_ivanov_3000@abv.bg</p>

                        </div>
                        <div className="col-md-4 footer-box">
                            <p><b>Subscribe Newsletter</b></p>
                            <p>This fuctionallity doesn't work cause we don't have such server</p>
                            <input type="email" className="form-control" placeholder="Your email" />
                            <button type="button" className={`btn btn-primary ${styles.footerBtn}`}>Subscribe</button>
                        </div>
                        <div>
                            <hr />
                            <p className={styles.copyright}>Website crafted by Ivan Ivanov</p>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    );
}

export default Home;