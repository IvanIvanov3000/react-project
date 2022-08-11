import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import * as movieService from '../services/movieService';
import { useAuthContext } from '../contexts/AuthContext';


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
                console.log(result);
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
        if (user.id === movie.author._id) {
            console.log("The author can't like or dislike their own movie")
            return;
        }

        if (movie.likes.includes(user.id)) {
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
        if (user.id === movie.author._id) {
            console.log("The author can't like or dislike their own movie")
            return;
        }

        if (!movie.likes.includes(user.id)) {
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
            <Link to={`/edit/${movie._id}`}><button className="details btn"  >Edit</button></Link>
            <button className="details btn" onClick={deleteHandler}>Delete</button>
        </>
    );
    const userButtons = (
        <>
            <button className="details btn" onClick={likeButtonClick} disabled={movie.likes.includes(user.id)}>Like</button>
            <button className="details btn" onClick={dislikeButtonClick} disabled={!movie.likes.includes(user.id)}>Dislike</button>
            {/* <Button onClick={likeButtonClick} disabled={movie.likes?.includes(user._id)}>Like</Button>; */}
        </>)



    return (
        <div className="hero details">

            <video loop autoPlay={true}>
                <source src="/images/video3.mp4" type="video/mp4" />
            </video>

            <div className="content">
                <div className="left">
                    <div className="images">

                        {movie.image2
                            ? (
                                <>
                                    <img src={movie.image2} alt="" />
                                    <img src={movie.image} alt="" />
                                </>
                            )
                            : <img src={movie.image} style={{ height: '60vh', background: "#30303b", objectFit: 'contain' }} alt="" />
                        }
                    </div>


                    <div className="wrapper">
                        <h3>{movie.title}</h3>
                        <b className=
                            {`tag ${movie.likes.length > 10
                                ? "popular"
                                : (movie.likes.length > 5 ? "interesting" : "ordinary")}`
                            }>
                            {movie.likes.length}
                        </b>
                        <span>{movie.year}</span>
                        <div className="buttons">

                            {user.id && (user.id == movie.author._id
                                ? ownerButtons
                                : userButtons
                            )}
                        </div>

                    </div>
                </div>

                <div className="right">
                    <p>{movie.description}</p>
                </div>
            </div>


        </div>
    );
}

export default Details;