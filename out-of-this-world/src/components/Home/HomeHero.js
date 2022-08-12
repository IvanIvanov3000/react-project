import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useState } from 'react';

import 'swiper/css';

import movies from './topMovies.js';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const HomeHero = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slides = [];
    for (let i = 0; i < movies.length; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="div" className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={movies[i].image} alt="" />
                    <div className="text-content">
                        <h2 className="title">{movies[i].title} <span>{movies[i].year}</span></h2>
                        <p>{movies[i].description}</p>
                        <a style={{ textDecoration: "none" }} href={movies[i].link}><button className="read-btn">Read More <FaArrowRight className='icon' /></button></a>
                    </div>
                </div>
            </SwiperSlide>
        )

    }
    const thumbs = [];

    for (let i = 0; i < movies.length; i++) {
        let image = movies[i].image;
        thumbs.push(
            <SwiperSlide key={i} style={{ backgroundImage: `url(${image})`}} />
        )

    }





    return (
        <div id='home-hero'>
            <div className="media-icons">
                <a href="https://www.facebook.com/"><FaFacebookF className='icon' /></a>
                <a href="https://www.instagram.com/"><FaInstagram className='icon' /></a>
                <a href="https://twitter.com/?lang=bg"><FaTwitter className='icon' /></a>

            </div>

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




        </div>
    );
};
export default HomeHero;
