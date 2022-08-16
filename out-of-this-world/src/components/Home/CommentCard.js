const CommentCard = ({ comment }) => {
    console.log(comment);
    return (
        <div className="col-md-5 testimonials">

            {comment.author.image
                ? <div className="circle img" style={{ backgroundImage: `url(${comment.author.image})` }}></div>
                : <div className="circle img" style={{ backgroundImage: `url(/images/profile.png)` }}></div>
            }
            <div className="rating">Rating: {comment.rating}</div>
            <p className="user-details"><b>{comment.author.username}</b> <br /> {comment.author.email}</p>
            <p>{comment.text}</p>
        </div>
    );
}

export default CommentCard;