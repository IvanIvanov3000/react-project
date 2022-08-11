import { useEffect, useState } from 'react';
// import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import * as movieService from '../services/movieService';

import CardList from './Card/CardList';

const Catalog = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div id="catalog">
            <section id="catalog">
                <Parallax className="catalog-title" speed={-400} translateX={['400px', '0px']} scale={[0.75, 1]} >
                    <h2 id="title" >Catalog</h2>
                </Parallax>
                <Parallax speed={10} translateX={['800px', '0px', 'easeOutQuint']} className="star-div">
                    <img src="../images/background-catalog/stars.png" className="star-div" alt="" />
                </Parallax>

                <Parallax speed={-60} className="moon-div">
                    <img src="../images/background-catalog/moon.png" className="moon" alt="" />
                </Parallax>
            </section>

            <section id="items">
                <img src="/images/wavebottom.png" alt="" className="bottom-img" />
                <img src="/images/wavetop.png" alt="" className="top-img" />

                <h2 className="flating-title">Most liked</h2>


                <div id="top">
                    <CardList movies={movies} />
                </div>

                <h2 className="flating-title">All</h2>

                <div id="all">
                    <img src="/images/wavebottom.png" alt="" className="bottom-img" />
                    <img src="/images/wavetop.png" alt="" className="top-img" />
                </div>



            </section>
        </div>
    );
}

export default Catalog;