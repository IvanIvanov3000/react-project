import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import * as movieService from '../../services/movieService';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Details.module.css';

import video from '../../assets/images/video3.mp4'

const Details = ({ match }) => {
    let historyHook = useHistory();

    const { user } = useAuthContext();
    const [movie, setMovie] = useState({
        image: "",
        title: "",
        year: "",
        tag: "",
        description: "",
        likes: [],
        author: { _id: "" }
    });
    const { movieId } = match.params;

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
                return;
            })
            .catch(err => {
                console.log(err);
            })
    }, [movieId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        movieService.destroy(movieId)
            .then(data => {
                console.log(data);
                historyHook.push('/catalog');
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    };

    const likeButtonClick = (e) => {
        e.preventDefault();
        if (user._id === movie.author._id) {
            console.log("The author can't like or dislike their own movie")
            return;
        }

        if (movie.likes.includes(user._id)) {
            console.log("You can't like again!")
            return;
        }

        movieService.likeMovie(movieId)
            .then(updatedMovie => {
                setMovie(updatedMovie);
                console.log(updatedMovie);
                return;
            })
            .catch(error => {
                console.log("error in details like");
                throw error;
            })


    };
    const dislikeButtonClick = (e) => {
        e.preventDefault();
        if (user._id === movie.author._id) {
            console.log("The author can't like or dislike their own movie")
            return;
        }

        if (!movie.likes.includes(user._id)) {
            console.log("You can't dislike again!")
            return;
        }

        movieService.dislikeMovie(movieId)
            .then(updatedMovie => {
                setMovie(updatedMovie);
                console.log(updatedMovie);
                return;
            })
            .catch(error => {
                console.log("error in details like");
                throw error;
            })


    };

    const ownerButtons = (
        <>
            {/* <Link className="button" to={`/edit/${movie._id}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a> */}
            <Link to={`/edit/${movie._id}`}><button className={styles.btn}  >Edit</button></Link>
            <button className={styles.btn} onClick={deleteHandler}>Delete</button>
        </>
    );
    const userButtons = (
        <>
            <button className={styles.btn} onClick={likeButtonClick} disabled={movie.likes.includes(user._id)}>Like</button>
            <button className={styles.btn} onClick={dislikeButtonClick} disabled={!movie.likes.includes(user._id)}>Dislike</button>
            {/* <Button onClick={likeButtonClick} disabled={movie.likes?.includes(user._id)}>Like</Button>; */}
        </>)



    return (
        <div className={`${styles.details} hero`}>

            <video loop autoPlay={true}>
                <source src={video} type="video/mp4" />
            </video>

            <div className='content'>
                <div className={styles.left}>
                    <div className={styles.images}>

                        {movie.image2
                            ? (
                                <>
                                    <img src={movie.image2} alt="" />
                                    <img src={movie.image} alt="" />
                                </>
                            )
                            : <img src={movie.image} className={movie.title.length > 40 ? styles.imageShort : styles.imageLong} alt="" />
                        }
                    </div>


                    <div className={styles.wrapper}>
                        <h3>{movie.title}</h3>
                        <b className={`${styles.likes} 
                        ${movie.likes.length > 3
                                ? styles.popular
                                : movie.likes.length >= 1 ? styles.interesting : styles.ordinary}`
                        }>
                            {movie.likes.length}
                        </b>

                        <span>{movie.year}</span>
                        <p>Tag: {movie.tag}</p>

                        <div className={styles.buttons}>

                            {user._id && (user._id === movie.author._id
                                ? ownerButtons
                                : userButtons
                            )}
                        </div>

                    </div>
                </div>

                <div className={styles.right}>
                    <p>{movie.description}</p>
                </div>
            </div>


        </div>
    );
}

export default Details;