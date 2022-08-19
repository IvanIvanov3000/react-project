import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRocket, FaMagic, FaMoon } from "react-icons/fa";


import * as authService from '../../services/authService';
import ErrorDiv from '../Error/ErrorDiv';

import styles from './ProfileEdit.module.css';

const ProfileEdit = () => {
    const historyHook = useHistory();

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
    const [message, setMessage] = useState('')

    useEffect(() => {
        authService.getProfile()
            .then(result => {
                setUserData(result);

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
                setMessage(err.message);
                console.log("error in profile edit");
                console.log(err.message);
            });
    }

    return (
        <div className={`hero ${styles['profile-edit']}`}>

            <video autoPlay={true} loop>
                <source src="/images/video5.mp4" type="video/mp4" />
            </video>
            <ErrorDiv err={{ message }} />

            <div className="content">


                <div class={styles.center}>


                    <form onSubmit={handleEdit}>
                        <h2>Edit Profile</h2>

                        <div className={styles.field}>
                            <FaRocket className={styles.icon} />
                            <input type="text" name="username" placeholder="Username" required defaultValue={userData.username} />
                        </div>

                        <div className={styles.field}>
                            <FaMagic className={styles.icon} />
                            <input type="text" name="email" placeholder="Email" required defaultValue={userData.email} />
                        </div>

                        <div className={styles.field}>
                            <FaMoon className={styles.icon} />
                            <input type="text" name="image" placeholder="Image Url" defaultValue={userData.image} />
                        </div>


                        <input type="submit" className={styles.btn} value=" Edit " />



                    </form>
                </div>

            </div>

        </div>
    );
}

export default ProfileEdit;