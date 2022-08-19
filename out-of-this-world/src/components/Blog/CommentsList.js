import Comment from "./Comments";
// import { useEffect, useState } from 'react';
import styles from './Blog.module.css'

const CommentsList = ({ comments, functions }) => {
    return (
        <>
            {comments.length > 0
                ? <>{comments.map(x => <Comment key={x._id} comment={x} functions={functions}/>)}</>
                : <p className={styles['no-data']}>No comments in database!</p>
            }
        </>
    );
}

export default CommentsList;