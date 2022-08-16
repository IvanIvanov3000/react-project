import Comment from "./Comments";
// import { useEffect, useState } from 'react';


const CommentsList = ({ comments, removeComment }) => {
    return (
        <>
            {comments.length > 0
                ? <>{comments.map(x => <Comment key={x._id} comment={x} removeComment={removeComment}/>)}</>
                : <p className="no-data">No comments in database!</p>
            }
        </>
    );
}

export default CommentsList;