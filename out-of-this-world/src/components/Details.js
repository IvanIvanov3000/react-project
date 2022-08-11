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
        author : {_id : ""}
    });
    const { movieId } = match.params;

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
            })
            .catch(err => {
                console.log(err);
            })

        // likeService.getPetLikes(petId)
        //     .then(likes => {
        //         setPet(state => ({ ...state, likes }))
        //     })
    }, [movieId]);

    const deleteHandler = (e) => {
        // e.preventDefault();

        // petService.destroy(petId, user.accessToken)
        //     .then(() => {
        //         // navigate('/dashboard');
        //     })
    };

    const likeButtonClick = () => {
        // if (user._id === movie._ownerId) {
        //     return;
        // }

        // if (movie.likes.includes(user._id)) {
        //     addNotification('You cannot like again')
        //     return;
        // }

        // likeService.like(user._id, petId)
        //     .then(() => {
        //         setPet(state => ({ ...state, likes: [...state.likes, user._id] }));

        //         addNotification('Successfuly liked a cat :)', types.success);
        //     });
    };

    const ownerButtons = (
        <>
            {/* <Link className="button" to={`/edit/${movie._id}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a> */}
            <button>Edit</button>
            <button>Delete</button>
        </>
    );
    const userButtons =(
            <>
                <button>Like</button>
                <button>Dislike</button>
                {/* <Button onClick={likeButtonClick} disabled={movie.likes?.includes(user._id)}>Like</Button>; */}
            </>)
    console.log(user.id, "user");
    console.log(movie.author._id, "movie author");


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
                            {/* <button>Like</button>
                            <button>Dislike</button> */}

                            {/* <button>Edit</button>
                        <button>Delete</button>  */}

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