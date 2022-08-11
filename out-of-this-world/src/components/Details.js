import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import * as movieService from '../services/movieService';
import { useAuthContext } from '../contexts/AuthContext';


const Details = ({ match }) => {
    // const navigate = useNavigate();
    const { user } = useAuthContext();
    const [movie, setMovie] = useState({
        image : "",
        title: "",
        year: "",
        tag: "",
        description: "",
        likes: []
    });
    const { movieId } = match.params;
    // const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    console.log(movieId);
    let movieLikes = 0;
    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                console.log(result)
                movieLikes = result.likes.length;
                setMovie(result);
                // setMovies(result);
            })
            .catch(err => {
                console.log(err);
            })

        // likeService.getPetLikes(petId)
        //     .then(likes => {
        //         setPet(state => ({ ...state, likes }))
        //     })
    }, [movieId]);

    // const deleteHandler = (e) => {
    //     e.preventDefault();

    //     petService.destroy(petId, user.accessToken)
    //         .then(() => {
    //             // navigate('/dashboard');
    //         })
    //         .finally(() => {
    //             setShowDeleteDialog(false);
    //         });
    // };

    // const deleteClickHandler = (e) => {
    //     e.preventDefault();
    //     console.log(process.env.NODE_ENV);
    //     setShowDeleteDialog(true);
    // }
    // const likeButtonClick = () => {
    //     if (user._id === pet._ownerId) {
    //         return;
    //     }

    //     if (pet.likes.includes(user._id)) {
    //         addNotification('You cannot like again')
    //         return;
    //     }

    //     likeService.like(user._id, petId)
    //         .then(() => {
    //             setPet(state => ({ ...state, likes: [...state.likes, user._id] }));

    //             addNotification('Successfuly liked a cat :)', types.success);
    //         });
    // };

    // const ownerButtons = (
    //     <>
    //         <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
    //         <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
    //     </>
    // );
    // const userButtons = <Button onClick={likeButtonClick} disabled={pet.likes?.includes(user._id)}>Like</Button>;





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
                            <button>Like</button>
                            <button>Dislike</button>

                            {/* <button>Edit</button>
                        <button>Delete</button>  */}
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