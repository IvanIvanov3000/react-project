// Import Swiper React components
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/css';
// import 'swiper/css/bundle';



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwiperDemo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const slides = [];

    slides.push(
        <SwiperSlide key={`slide-${1}`} tag="div" className="swiper-wrapper">
            <div className="swiper-slide">
                <img src="/images/home-page/1st.jpg" alt="" />
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
        </SwiperSlide>,
        <SwiperSlide key={`slide-${2}`} tag="div" className="swiper-wrapper">
            <div className="swiper-slide">
                <img src="/images/home-page/2nd.jpg" alt="" />
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
        </SwiperSlide>,
        <SwiperSlide key={`slide-${3}`} tag="div" className="swiper-wrapper">
            <div className="swiper-slide dark-layer">
                <img src="/images/home-page/3rd.jpg" alt="" />
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
        </SwiperSlide>,
        <SwiperSlide key={`slide-${4}`} tag="div" className="swiper-wrapper">
            <div className="swiper-slide dark-layer">
                <img src="/images/home-page/4th.jpg" alt="" />
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
        </SwiperSlide>

    );

    console.log(slides);

    const thumbs = [];

    thumbs.push(
        <SwiperSlide key='1' style={{ backgroundImage: `url("/images/home-page/1st.jpg")` }}>

        </SwiperSlide>,

        <SwiperSlide key='2' style={{ backgroundImage: `url("/images/home-page/2nd.jpg")` }}>

        </SwiperSlide>,

        <SwiperSlide key='3' style={{ backgroundImage: `url("/images/home-page/3rd.jpg")` }}>

        </SwiperSlide>,

        <SwiperSlide key='4' style={{ backgroundImage: `url("/images/home-page/4th.jpg")` }}>

        </SwiperSlide>

    );



    return (
        <React.Fragment>
            <Swiper
                id="main"
                thumbs={{ swiper: thumbsSwiper }}
                className='bg-slider'
                tag="section"
                wrapperTag="div"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                onSlideChange={(swiper) => {
                    console.log('Slide index changed to: ', swiper.activeIndex);
                }}
                onReachEnd={() => console.log('Swiper end reached')}
            >
                {slides}
            </Swiper>

            <Swiper
                id="thumbs"
                className="swiper-wrapper thumbs-container"
                spaceBetween={0}
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
            >
                {thumbs}
            </Swiper>




        </React.Fragment>
    );
};
export default SwiperDemo;
