import { useEffect, useState } from 'react';

import * as blogService from '../../../services/blogService';
import CommentCard from './CommentCard';

import styles from './HomeComments.module.css';

const HomeComments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        blogService.getTopComments()
            .then(result => {
                setComments(result);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (<>
        {comments.length > 0
            ?
            (< section className={styles.testimonials} >

                <div className={styles.container}>
                    <h1 className={`${styles.title} text-center`}>What clients say?</h1>


                    <div className={`row offset-1 ${styles.table}`}>

                        <>{comments.map(x => <CommentCard key={x._id} comment={x} />)}</>


                    </div>
                </div>

            </section >
            )
            : <></>
        }
    </>);
}

export default HomeComments;