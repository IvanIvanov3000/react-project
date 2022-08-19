import { FaPepperHot, FaBalanceScale } from "react-icons/fa";
import { useEffect, useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import CommentsList from './CommentsList';
import * as blogService from '../../services/blogService';
import ErrorDiv from '../Error/ErrorDiv';

import styles from './Blog.module.css';
import video from '../../assets/images/video1.mp4'

const Blog = () => {
    const { user } = useAuthContext();
    const [comments, setComments] = useState({});
    const [message, setMessage] = useState("");


    useEffect(() => {
        blogService.getAll()
            .then(result => {
                setComments(result);
                setMessage('');
                return;
            })
            .catch(err => {
                setMessage(err.message);
                console.log(err);
            })
    }, []);

    function removeComment(comment) {
        setComments(comments.filter(x => x._id !== comment._id));
    }
    function addError(err) {
        setMessage(err.message);
    }

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let text = formData.get('text');
        let rating = formData.get('rating');

        blogService.createComment({ text, rating })
            .then((result) => {
                e.target.reset();

                setComments(oldArray => [...oldArray, result]);
                setMessage('');


            })
            .catch(err => {
                setMessage(err.message);
                console.log("error in blog")
                console.log(err);
            });
    }


    return (
        <div className={styles.blog}>

            <video autoPlay={true} loop >
                <source src={video} type="video/mp4" />
            </video>
            <ErrorDiv err={{ message }} />

            <div className={styles.content}>
                <div className={styles.left} style={{ backgroundColor: comments.length > 0 ? 'transparent' : '#202834' }}>
                    <CommentsList comments={comments} functions={{ removeComment, addError }} />
                </div>
                <div className={styles.right} style={{ backgroundColor: user.email ? 'transparent' : '#202834' }}>
                    {user.email
                        ? (
                            <form onSubmit={createHandler}>
                                <div className={`${styles.field} ${styles.top}`}>
                                    <FaPepperHot className={styles.icon} />
                                    <textarea type="text" name="text" placeholder="Write a comment"></textarea>
                                </div>
                                <div className={`${styles.field} ${styles.bottom}`}>
                                    <FaBalanceScale className={styles.icon} />
                                    <p>Rate us from 1 to 10</p>
                                    <input type="number" name="rating" placeholder="1-10" required min="1" max="10" />
                                </div>
                                <input type="submit" className={styles['submit-btn']} value="Add a comment" />
                            </form>
                        )
                        : <p className={styles['no-data']}>You have to login if you want to add a comment</p>
                    }
                </div>

            </div>


        </div>

    );
}

export default Blog;