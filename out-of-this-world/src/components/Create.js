import { FaRocket, FaMagic, FaMoon, FaPen } from "react-icons/fa";
import { useHistory } from 'react-router-dom';


import * as movieService from '../services/movieService';


const Create = () => {
    
    let historyHook = useHistory();


    const handleCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let year = formData.get('year');
        let tag = formData.get('tag');
        let image = formData.get('image');
        let isPublic = formData.get('isPublic');
        let description = formData.get('description');

        isPublic = isPublic === "true" ? true : false;

        movieService.create({title, year, tag, image, isPublic, description})
            .then((movieData) => {

                console.log(movieData);
                historyHook.push('/home')

            })
            .catch(err => {
                // TODO: show notification
                console.log("error in create")
                console.log(err);
            });
    }

    return (
        <div className="hero create">

            <video autoPlay={true} loop>
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>


            <div className="form-box">
                <h2>ADD A FILM</h2>

                <form onSubmit={handleCreate}>
                    <div className="left">
                        <div className="field">
                            <FaRocket className='icon' />
                            <input type="text" name="title" placeholder="Title" required />
                        </div>

                        <div className="field">
                            <FaMagic className='icon' />
                            <input type="number" name="year" placeholder="Year" required />
                        </div>
                        <div className="field">
                            <FaMagic className='icon' />
                            <input type="text" name="tag" placeholder="Tag" required />
                        </div>
                        <div className="field">
                            <FaRocket className='icon' />
                            <input type="text" name="image" placeholder="Image Url" required />
                        </div>


                        <div className="field radio">
                            <FaMoon className='icon' />
                            <p>Public: </p>
                            <input type="radio" id="yes" name="isPublic" defaultValue="true" />
                            <label htmlFor="yes">Yes</label><br />
                            <input type="radio" id="no" name="isPublic" defaultValue="false" />
                            <label htmlFor="no">No</label><br />
                        </div>

                    </div>
                    <div className="right">
                        <div className="field ">
                            <FaPen className='icon' />
                            <textarea type="text" name="description" placeholder="Description..."></textarea>
                        </div>

                        <input type="submit" className="submit-btn" value="Create" />
                    </div>


                </form>
            </div>

        </div>
    );
}

export default Create;