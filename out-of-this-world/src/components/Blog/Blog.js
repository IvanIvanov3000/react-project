import Comment from './Comments';

const Blog = () => {

    return (
        <div class="hero">

        <video autoplay loop muted plays-inline>
            <source src="/images/video3.mp4" type="video/mp4"/>
        </video>

        <div class="content">
            <div class="left">
                <Comment/>
                <Comment/>
                <Comment/>
                
            </div>

            <div class="right">
                <form action="POST">
                    <div class="field top">
                        <i class="uil uil-align-justify"></i>
                        <textarea type="text" placeholder="Write a comment" value=""></textarea>
                    </div>
                    <div class="field bottom">
                        <i class="uil uil-rocket"></i>
                        <p>Rate us from 1 to 10</p>
                        <input type="number" placeholder="1-10" required min="1" max="10"/>
                    </div>
                    <input type="submit" class="submit-btn" value="Add a comment"/>
                </form>
            </div>
        </div>


    </div>

    );
}

export default Blog;