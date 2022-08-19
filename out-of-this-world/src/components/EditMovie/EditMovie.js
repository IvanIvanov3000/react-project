import { FaRocket, FaMagic, FaMoon, FaPen } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';

import * as movieService from '../../services/movieService';
import { useAuthContext } from '../../contexts/AuthContext';
import ErrorDiv from '../Error/ErrorDiv';

import styles from '../Create/Create.module.css'

const Edit = ({match}) => {

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
    const [message, setMessage] = useState("");

    const { movieId } = match.params;
    console.log(movieId);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);

                console.log(user._id, "user");
                console.log(result.author._id, "movie author");
                if(user._id !== result.author._id){
                    return historyHook.push(`/details/${result._id}`);
                }
                return;
            })
            .catch(err => {
                console.log(err);
            })


    }, [movieId, user._id]);

    const handleEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let year = formData.get('year');
        let tag = formData.get('tag');
        let image = formData.get('image');
        let isPublic = formData.get('isPublic');
        let description = formData.get('description');

        isPublic = isPublic === "true" ? true : false;

        movieService.edit(movieId, { title, year, tag, image, isPublic, description })
            .then((movieData) => {

                console.log(movieData);
                setMessage('');

                historyHook.push(`/details/${movieId}`)

            })
            .catch(err => {
                setMessage(err.message);
                console.log("error in create")
                console.log(err);
            });
    }

    return (
        <div className={`${styles.create}`}>

            <video autoPlay={true} loop>
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>
            <ErrorDiv err={{ message }} />


            <div className={styles["form-box"]}>
                <h2>EDIT FILM</h2>

                <form onSubmit={handleEdit}>
                    <div className={styles.left}>
                        <div className={styles.field}>
                            <FaRocket className={styles.icon} />
                            <input type="text" name="title" placeholder="Title" required defaultValue={movie.title} />
                        </div>

                        <div className={styles.field}>
                            <FaMagic className={styles.icon} />
                            <input type="number" name="year" placeholder="Year" required defaultValue={movie.year} />
                        </div>
                        <div className={styles.field}>
                            <FaMagic className={styles.icon} />
                            <input type="text" name="tag" placeholder="Tag" required defaultValue={movie.tag} />
                        </div>
                        <div className={styles.field}>
                            <FaRocket className={styles.icon} />
                            <input type="text" name="image" placeholder="Image Url" required defaultValue={movie.image} />
                        </div>


                        <div className={`${styles.field} ${styles.radio}`}>
                            <FaMoon className={styles.icon} />
                            <p>Public: </p>
                            <input type="radio" id="yes" name="isPublic" defaultValue="true" defaultChecked={movie.isPublic} />
                            <label htmlFor="yes">Yes</label><br />
                            <input type="radio" id="no" name="isPublic" defaultValue="false" defaultChecked={!movie.isPublic} />
                            <label htmlFor="no">No</label><br />
                        </div>

                    </div>
                    <div className={styles.right}>
                        <div className={styles.field}>
                            <FaPen className={styles.icon} />
                            <textarea type="text" name="description" placeholder="Description..." defaultValue={movie.description}></textarea>
                        </div>

                        <input type="submit" className={styles.btn} value=" Edit " />
                    </div>


                </form>
            </div>

        </div>
    );
}

export default Edit;