const Comment = ({comment}) => {

    return (
        <div className="field">
        <p>{comment.comment}</p>
        <span>{comment.author.username}</span>
    </div>
    );
}

export default Comment;