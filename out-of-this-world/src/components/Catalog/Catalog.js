import { useEffect, useState } from 'react';
// import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import * as movieService from '../../services/movieService';

import moon from '../../assets/images/background-catalog/moon.png'; 
import stars from '../../assets/images/background-catalog/stars.png';

import CardList from '../Card/CardList';
import styles from './Catalog.module.css';

const Catalog = () => {
    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);


    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result);
            })
            .catch(err => {
                console.log(err);
            })

        movieService.getTopMovies()
            .then(result => {
                result.sort((a, b) => a.likes.length - b.likes.length);
                result.reverse();
                setTopMovies(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div >
            <section className={styles.catalog}>
                <Parallax className={styles['catalog-title']} speed={-400} translateX={['400px', '0px']} scale={[0.75, 1]} >
                    <h2 className={styles.title} >Catalog</h2>
                </Parallax>
                <Parallax speed={10} translateX={['800px', '0px', 'easeOutQuint']} className={styles["star-div"]}>
                    <img src={stars} className={styles["star-div"]} alt="" />
                </Parallax>

                <Parallax speed={-60} className={styles["moon-div"]}>
                    <img src={moon} className={styles["moon-div"]} alt="" />
                </Parallax>
            </section>

            <section className={styles.items}>
                <img src="/images/wavebottom.png" alt="" className={styles["bottom-img"]} />
                <img src="/images/wavetop.png" alt="" className={styles["top-img"]} />

                <h2 className={styles["floating-title"]}>Most liked</h2>


                <div className={styles.top}>
                    {topMovies
                        ? <CardList movies={topMovies} />
                        : <p className={styles["floating-title"]}>There are popular movies yet.</p>
                    }

                </div>

                <h2 className={styles["floating-title"]}>All</h2>

                <div className={styles.all}>
                    <img src="/images/wavebottom.png" alt="" className={styles["bottom-img"]} />

                    {movies
                        ? <CardList movies={movies} />
                        : <p className={styles["floating-title"]}>There are no movies in the database.</p>
                    }

                    <img src="/images/wavetop.png" alt="" className={styles["top-img"]} />
                </div>



            </section>
        </div>
    );
}

export default Catalog;