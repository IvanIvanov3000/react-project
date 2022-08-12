import { FaPepperHot, FaBalanceScale } from "react-icons/fa";
import Comment from './Comments';


const Blog = () => {

    return (
        <div className="hero blog">

            <video autoPlay={true} loop >
                <source src="/images/video1.mp4" type="video/mp4" />
            </video>

            <div className="content">
                <div className="left">
                    <Comment />
                    <Comment />
                    <Comment />

                </div>

                <div className="right">
                    <form action="POST">
                        <div className="field top">
                            <FaPepperHot className='icon' />
                            <textarea type="text" placeholder="Write a comment" value=""></textarea>
                        </div>
                        <div className="field bottom">
                            <FaBalanceScale className='icon' />
                            <p>Rate us from 1 to 10</p>
                            <input type="number" placeholder="1-10" required min="1" max="10" />
                        </div>
                        <input type="submit" className="submit-btn" value="Add a comment" />
                    </form>
                </div>
            </div>


        </div>

    );
}

export default Blog;