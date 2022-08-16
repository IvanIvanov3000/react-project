import { FaPepperHot, FaBalanceScale } from "react-icons/fa";
import { useEffect, useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import CommentsList from './CommentsList';
import * as blogService from '../../services/blogService';

const Blog = () => {
    const { user } = useAuthContext();
    const [comments, setComments] = useState({});

    useEffect(() => {
        blogService.getAll()
            .then(result => {
                setComments(result);
                return;
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function removeComment(comment) {
        setComments(comments.filter(x => x._id !== comment._id));
    }

    const createHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let text = formData.get('text');
        let rating = formData.get('rating');

        console.log(text, rating);
        blogService.createComment({ text, rating })
            .then((result) => {
                console.log(result);

            })
            .catch(err => {
                // TODO: show notification
                console.log("error in blog")
                console.log(err);
            });
    }

    return (
        <div className="hero blog">

            <video autoPlay={true} loop >
                <source src="/images/video1.mp4" type="video/mp4" />
            </video>

            <div className="content">
                <div className="left" style={{ backgroundColor: comments.length > 0 ? 'transparent' : '#202834' }}>
                    <CommentsList comments={comments} removeComment={removeComment} />
                </div>
                <div className="right" style={{ backgroundColor: user.email ? 'transparent' : '#202834' }}>
                    {user.email
                        ? (
                            <form onSubmit={createHandler}>
                                <div className="field top">
                                    <FaPepperHot className='icon' />
                                    <textarea type="text" name="text" placeholder="Write a comment"></textarea>
                                </div>
                                <div className="field bottom">
                                    <FaBalanceScale className='icon' />
                                    <p>Rate us from 1 to 10</p>
                                    <input type="number" name="rating" placeholder="1-10" required min="1" max="10" />
                                </div>
                                <input type="submit" className="submit-btn" value="Add a comment" />
                            </form>
                        )
                        : <p className="no-data">You have to login if you want to add a comment</p>
                    }
                </div>

            </div>


        </div>

    );
}

export default Blog;