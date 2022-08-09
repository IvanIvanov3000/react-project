import { useState, useEffect } from 'react';
import './Home.css';
import HomeHero from './HomeHero/HomeHero';

const Home = () => {

    return (
        <>
            <HomeHero />
            <section class="about section">
                <h2>About section</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima, doloremque minus maxime neque fugit
                    vel dignissimos dolor! Deserunt veniam voluptatem explicabo reiciendis pariatur fugiat doloremque facere
                    maiores illo vitae alias doloribus et sunt, earum sed deleniti dolorem, dolores voluptate. Beatae itaque ut
                    perferendis tempora architecto repellendus, eligendi, adipisci ipsa eos quas vitae obcaecati iure assumenda!
                    Assumenda numquam esse tempora, nobis et nesciunt doloribus quasi expedita recusandae sunt. Quaerat sequi
                    eos corrupti, recusandae saepe amet impedit distinctio? Cum at iure nobis? Commodi sed odio eum repudiandae
                    velit unde suscipit quibusdam provident, laborum doloribus earum, ea, ad inventore possimus rem. Eaque.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima, doloremque minus maxime neque fugit
                    vel dignissimos dolor! Deserunt veniam voluptatem explicabo reiciendis pariatur fugiat doloremque facere
                    maiores illo vitae alias doloribus et sunt, earum sed deleniti dolorem, dolores voluptate. Beatae itaque ut
                    perferendis tempora architecto repellendus, eligendi, adipisci ipsa eos quas vitae obcaecati iure assumenda!
                    Assumenda numquam esse tempora, nobis et nesciunt doloribus quasi expedita recusandae sunt. Quaerat sequi
                    eos corrupti, recusandae saepe amet impedit distinctio? Cum at iure nobis? Commodi sed odio eum repudiandae
                    velit unde suscipit quibusdam provident, laborum doloribus earum, ea, ad inventore possimus rem. Eaque.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima, doloremque minus maxime neque fugit
                    vel dignissimos dolor! Deserunt veniam voluptatem explicabo reiciendis pariatur fugiat doloremque facere
                    maiores illo vitae alias doloribus et sunt, earum sed deleniti dolorem, dolores voluptate. Beatae itaque ut
                    perferendis tempora architecto repellendus, eligendi, adipisci ipsa eos quas vitae obcaecati iure assumenda!
                    Assumenda numquam esse tempora, nobis et nesciunt doloribus quasi expedita recusandae sunt. Quaerat sequi
                    eos corrupti, recusandae saepe amet impedit distinctio? Cum at iure nobis? Commodi sed odio eum repudiandae
                    velit unde suscipit quibusdam provident, laborum doloribus earum, ea, ad inventore possimus rem. Eaque.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam sit praesentium? Consectetur commodi eos,
                    quos fugit accusantium nisi necessitatibus sint quasi ipsum provident, eius officiis possimus consequuntur
                    beatae suscipit saepe temporibus reprehenderit incidunt ad at distinctio nulla quae. Et maxime quod eaque
                    iusto, eveniet, quaerat tenetur facilis ipsam nisi explicabo itaque? Nulla expedita voluptatibus harum
                    aliquid ullam cupiditate eius, facilis animi provident! Similique recusandae tempore, assumenda repellendus
                    nobis voluptas vero, porro eos placeat quaerat consectetur eius voluptatibus nulla veritatis maxime fuga.
                    Eveniet assumenda sed nemo mollitia corporis, repellendus eius repellat iste totam illo sit? Aliquam, rerum
                    ratione eveniet ad quia eum! Reprehenderit est odit animi laboriosam atque dolores quasi deleniti aut quae
                    dolorum aliquid qui aliquam, perferendis similique voluptatum totam amet ex doloribus nostrum beatae.
                    Repellat error at ducimus. Quod sequi beatae officia modi aliquam eaque velit nesciunt, vero, vel, quaerat
                    officiis? Tempore inventore nostrum qui maiores assumenda omnis. Tempora nesciunt officiis quaerat
                    consequatur esse fuga quidem commodi odit quod ab, animi eos doloremque cum aperiam maxime est ut deleniti
                    necessitatibus nobis. Incidunt, laudantium qui. Maiores recusandae facere quia pariatur sunt eius fugiat
                    quisquam eaque aliquid in est dolorum temporibus deleniti alias ab adipisci, autem commodi odio odit. Iste.
                </p>
            </section>


            <section id="banner">
                <div class="line"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="promo-title">BEST DIGITAL AGENCY</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores dolorem eos
                                ipsum consequatur totam maxime praesentium voluptatum laborum.</p>
                            <a href="#"><img class="play-btn" src="/images/play.png" alt="" />Watch tutorials</a>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="/images/home2.png" class="image-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <img src="/images/wavebottom.png" alt="" class="bottom-img" />
            </section>

            <section id="services">
                <div class="container text-center">
                    <h1 class="title">WHAT WE DO?</h1>
                    <div class="row text-center">
                        <div class="col-md-4 services">
                            <img src="/images/service1.png" class="service-img" alt="" />
                            <h4>Growth Marketing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe!</p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="/images/service2.png" class="service-img" alt="" />
                            <h4>Online Branding</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe!</p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="/images/service3dark.png" class="service-img" alt="" />
                            <h4>Animated Ads</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe!</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">All services</button>
                </div>

            </section>


            <section id="about-us">
                <img src="/images/wavetop.png" alt="" class="top-img" />
                <div class="container">
                    <h1 class="title text-center">Why choose us?</h1>
                    <div class="row">
                        <div class="col-md-6 about-us">
                            <p class="about-title">Why we are different</p>
                            <ul>
                                <li>Believe in doing business with honesty</li>
                                <li>Believe in doing business with honesty</li>
                                <li>We deliver on time</li>
                                <li>We protect you online reputation</li>
                                <li>Believe in doing business with honesty</li>
                                <li>We create a winning content strategy</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img src="/images/network.png" class='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <img src="/images/wavebottom.png" alt="" class="bottom-img" />

            </section>

            <section id="testimonials">

                <div class="container">
                    <h1 class="title text-center">What clients say?</h1>


                    <div class="row offset-1">
                        <div class="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor
                                sit,
                                amet consectetur adipisicing elit. Nulla consequuntur aperiam dolorum placeat possimus fugiat,
                                ipsam
                                iure non! Quis, odit?</p>
                            <img src="/images/user1.jpg" alt="" />
                            <p class="user-details"><b>Angelina</b> <br /> Co-founder at xyz</p>
                        </div>
                        <div class="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor
                                sit,
                                amet consectetur adipisicing elit. Nulla consequuntur aperiam dolorum placeat possimus fugiat,
                                ipsam
                                iure non! Quis, odit?</p>
                            <img src="/images/user2.jpg" alt="" />
                            <p class="user-details"><b>Jhon Doe</b> <br /> Director at xyz</p>
                        </div>

                    </div>
                </div>

            </section>

            <section id="social-media">
                <img src="/images/wavetop.png" alt="" class="top-img" />

                <div class="container text-center">
                    <p>Find us on social media</p>

                    <div class="social-icons">
                        <a href="#"><img src="/images/icons/facebook-icon.png" alt="" /></a>
                        <a href="#"><img src="/images/icons/instagram-icon.png" alt="" /></a>
                        <a href="#"><img src="/images/icons/twitter-icon.png" alt="" /></a>
                        <a href="#"><img src="/images/icons/whatsapp-icon.png" alt="" /></a>
                        <a href="#"><img src="/images/icons/linkedin-icon.png" alt="" /></a>
                        <a href="#"><img src="/images/icons/snapchat-icon.png" alt="" /></a>

                    </div>
                </div>
                <img src="/images/wavebottom.png" class="footer-img" alt="" />


            </section>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-box">
                            <img src="/images/demo-logo.png" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nulla perspiciatis numquam
                                assumenda ea, vero sunt blanditiis enim maiores exercitationem, iusto porro?
                            </p>
                        </div>
                        <div class="col-md-4 footer-box">
                            <p><b>Contact us</b></p>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i> World Trade Center, Sofia</p>
                            <p><i class="fa fa-phone" aria-hidden="true"></i> +1 01233435667</p>
                            <p><i class="fa fa-envelope-o" aria-hidden="true"></i> xyz@gmail.com</p>

                        </div>
                        <div class="col-md-4 footer-box">
                            <p><b>Subscribe Newsletter</b></p>
                            <input type="email" class="form-control" placeholder="Your email" />
                            <button type="button" class="btn btn-primary">Subscribe</button>
                        </div>
                        <div>
                            <hr />
                            <p class="copyright">Website crafted by Ivan Ivanov</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;