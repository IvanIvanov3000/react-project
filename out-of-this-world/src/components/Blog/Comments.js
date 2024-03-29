import { useAuthContext } from '../../contexts/AuthContext';
import * as blogService from '../../services/blogService';

import styles from './Comments.module.css';

const Comment = ({ comment, functions}) => {
    const { user } = useAuthContext();

    const deleteHandler = (e) => {
        e.preventDefault();
        blogService.deleteComment(comment._id)
            .then((result) => {
                functions.removeComment(comment);

            })
            .catch(err => {
                console.log("error in blog")
                console.log(err);
                functions.addError(err);
                
            });
    }

    return (
        <div className={styles.field}>
            <p>{comment.text}</p>
            <b>Rating : {comment.rating}</b>
            <span>{comment.author.username}</span>
            {user._id === comment.author._id
                ? <button className={styles.btn} onClick={deleteHandler}>Delete</button>
                : <></>
            }

        </div>
    );
}

export default Comment;