const HomeHero = () => {

    return (
        <>
        <section className="home">
        <div className="media-icons">
            <a href="https://www.facebook.com/"><i className="uil uil-facebook-f"></i></a>
            <a href="https://www.instagram.com/"><i className="uil uil-instagram"></i></a>
            <a href="https://twitter.com/?lang=bg"><i className="uil uil-twitter"></i></a>

        </div>

        <div className="swiper bg-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="/images/home-page/1st.jpg" alt=""/>
                    <div className="text-content">
                        <h2 className="title">Interstellar <span>2014</span></h2>
                        <p>Interstellar is about Earth's last chance to find a habitable planet before a lack of
                            resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew
                            McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to
                            find a habitable planet in another galaxy.
                        </p>
                        <button className="read-btn">Read More <i className="uil uil-arrow-right"></i></button>
                    </div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/home-page/2nd.jpg" alt=""/>
                    <div className="text-content">
                        <h2 className="title">The Martian <span>2015</span></h2>
                        <p>During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm
                            and left behind by his crew. But Watney has survived and finds himself stranded and alone on
                            the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and
                            spirit to subsist and find a way to signal to Earth that he is alive.
                        </p>
                        <button className="read-btn">Read More <i className="uil uil-arrow-right"></i></button>
                    </div>
                </div>
                <div className="swiper-slide dark-layer">
                    <img src="/images/home-page/3rd.jpg" alt=""/>
                    <div className="text-content">
                        <h2 className="title">Hidden figures <span>2016</span></h2>
                        <p>As the United States raced against Russia to put a man in space, NASA found untapped talent
                            in a group of African-American female mathematicians that served as the brains behind one of
                            the greatest operations in U.S. history. Based on the unbelievably true life stories of
                            three of these women, known as "human computers", we follow these women as they quickly rose
                            the ranks of NASA alongside many of history's greatest minds specifically tasked with
                            calculating the momentous launch of astronaut John Glenn into orbit, and guaranteeing his
                            safe return.
                        </p>
                        <button className="read-btn">Read More <i className="uil uil-arrow-right"></i></button>
                    </div>
                </div>
                <div className="swiper-slide dark-layer">
                    <img src="/images/home-page/4th.jpg" alt=""/>
                    <div className="text-content">
                        <h2 className="title">Passagers <span>2016</span></h2>
                        <p>The spaceship, Starship Avalon, in its 120-year voyage to a distant colony planet known as
                            the "Homestead Colony" and transporting 5,258 people has a malfunction in one of its sleep
                            chambers. As a result one hibernation pod opens prematurely and the one person that awakes,
                            Jim Preston (Chris Pratt) is stranded on the spaceship, still 90 years from his destination
                        </p>
                        <button className="read-btn">Read More <i className="uil uil-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-slider-thumbs">
            <div className="swiper-wrapper thumbs-container">
                <img src="/images/home-page/1st.jpg" className="swiper-slide" alt=""/>
                <img src="/images/home-page/2nd.jpg" className="swiper-slide" alt=""/>
                <img src="/images/home-page/3rd.jpg" className="swiper-slide" alt=""/>
                <img src="/images/home-page/4th.jpg" className="swiper-slide" alt=""/>


            </div>
        </div>
    </section>
        </>
    );
}

export default HomeHero;