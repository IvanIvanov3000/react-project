import { useAuthContext } from '../../contexts/AuthContext';


const Comment = ({ comment }) => {
    const { user } = useAuthContext();

    return (
        <div className="field">
            <p>{comment.text}</p>
            <b>Rating : {comment.rating}</b>
            <span>{comment.author.username}</span>
            {user._id === comment.author._id
                ? <button className="delete btn">Delete</button>
                : <></>
            }

        </div>
    );
}

export default Comment;