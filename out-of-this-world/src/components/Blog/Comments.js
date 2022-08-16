import { useAuthContext } from '../../contexts/AuthContext';
import * as blogService from '../../services/blogService';


const Comment = ({ comment, removeComment}) => {
    const { user } = useAuthContext();

    const deleteHandler = (e) => {
        e.preventDefault();
        blogService.deleteComment(comment._id)
            .then((result) => {
                removeComment(comment);

            })
            .catch(err => {
                // TODO: show notification
                console.log("error in blog")
                console.log(err);
            });
    }

    return (
        <div className="field">
            <p>{comment.text}</p>
            <b>Rating : {comment.rating}</b>
            <span>{comment.author.username}</span>
            {user._id === comment.author._id
                ? <button className="delete btn" onClick={deleteHandler}>Delete</button>
                : <></>
            }

        </div>
    );
}

export default Comment;