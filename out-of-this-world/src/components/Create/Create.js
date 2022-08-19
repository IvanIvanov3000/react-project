import { FaRocket, FaMagic, FaMoon, FaPen } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

import * as movieService from '../../services/movieService';
import ErrorDiv from '../Error/ErrorDiv';


const Create = () => {

    let historyHook = useHistory();
    const [message, setMessage] = useState("");


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

        movieService.create({ title, year, tag, image, isPublic, description })
            .then((movieData) => {

                console.log(movieData);
                setMessage('');

                historyHook.push(`/details/${movieData._id}`)


            })
            .catch(err => {
                setMessage(err.message);
                console.log("error in create")
                console.log(err);
            });
    }

    return (
        <div className="hero create">

            <video autoPlay={true} loop>
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>
            <ErrorDiv err={{ message }} />


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
                            <input type="radio" id="yes" name="isPublic" defaultValue="true" required/>
                            <label htmlFor="yes">Yes</label><br />
                            <input type="radio" id="no" name="isPublic" defaultValue="false" required/>
                            <label htmlFor="no">No</label><br />
                        </div>

                    </div>
                    <div className="right">
                        <div className="field ">
                            <FaPen className='icon' />
                            <textarea type="text" name="description"required placeholder="Description..."></textarea>
                        </div>

                        <input type="submit" className="submit-btn" value="Create" />
                    </div>


                </form>
            </div>

        </div>
    );
}

export default Create;