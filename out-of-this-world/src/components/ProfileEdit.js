import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRocket, FaMagic, FaMoon, FaPen } from "react-icons/fa";


import * as authService from '../services/authService';
import { useAuthContext } from '../contexts/AuthContext';

const ProfileEdit = () => {
    const historyHook = useHistory();
    const { login } = useAuthContext();

    const [userData, setUserData] = useState(
        {
            image: "",
            _id: "",
            username: "",
            email: "",
            movies: [],
            comments: [],
        }
    );

    useEffect(() => {
        authService.getProfile()
            .then(result => {
                setUserData(result);

                console.log(result, userData.movies.length);
            });
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let username = formData.get('username');
        let image = formData.get('image');


        authService.editProfile({ email, username, image })
            .then((authData) => {
                historyHook.push('/profile');

            })
            .catch(err => {
                console.log("error in profile edit");
                console.log(err.message);
            });
    }

    return (
        <div className="hero profile-edit">

            <video autoPlay={true} loop>
                <source src="/images/video5.mp4" type="video/mp4" />
            </video>

            <div className="content">


                <div class="center">


                    <form onSubmit={handleEdit}>
                        <h2>Edit Profile</h2>

                        <div className="field">
                            <FaRocket className='icon' />
                            <input type="text" name="username" placeholder="Username" required defaultValue={userData.username} />
                        </div>

                        <div className="field">
                            <FaMagic className='icon' />
                            <input type="text" name="email" placeholder="Email" required defaultValue={userData.email} />
                        </div>

                        <div className="field">
                            <FaRocket className='icon' />
                            <input type="text" name="image" placeholder="Image Url" defaultValue={userData.image} />
                        </div>


                        <input type="submit" className="btn details" value="Create" />



                    </form>
                </div>

            </div>

        </div>
    );
}

export default ProfileEdit;