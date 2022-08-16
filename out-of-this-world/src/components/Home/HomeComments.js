import { useEffect, useState } from 'react';

import * as blogService from '../../services/blogService';
import CommentCard from './CommentCard';


const HomeComments = () => {
    const [comments, setComments] = useState([]);
    console.log(comments);
    useEffect(() => {
        blogService.getTopComments()
            .then(result => {
                setComments(result);
                console.log(comments);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (<>
        {comments.length > 0
            ?
            (< section id="testimonials" >

                <div className="container">
                    <h1 className="title text-center">What clients say?</h1>


                    <div className="row offset-1">

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