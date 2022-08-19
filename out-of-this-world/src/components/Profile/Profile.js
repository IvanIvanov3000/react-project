import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as authService from '../../services/authService';
import CardList from '../Card/CardList';

import styles from './Profile.module.css';


const Profile = () => {

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
    }, [])

    return (
        <div className={`hero ${styles.profile}`}>

            <video autoPlay={true} loop>
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>


            <div className="content">
                <div className={styles.left}>

                    <div className={styles.images}>
                        {userData.image
                            ? <img src={userData.image} className={styles["profile-img"]} alt="" />

                            : <img src="/images/profile.png" className={styles["profile-img"]} alt="" />
                        }
                    </div>


                    <div className={styles.wrapper}>
                        <h3>Username: {userData.username}</h3>

                        <div className={styles.email}>Email: {userData.email}</div>
                        <div className={styles.buttons}>

                            <Link to='/profile/edit'>
                                <button className={styles.btn}>Edit User Credentials</button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={`${styles.right}  ${userData.movies.length > 0 ? styles.transparent : ""}`}>
                    {userData.movies.length > 0
                        ? <CardList movies={userData.movies} />
                        : (<div className={styles["no-movies"]}>
                            <p >You have not created a movie yet. Why don't you create one?</p>
                            <Link to="/create"><button className={styles.btn}>Create Movie</button></Link>
                        </div>
                        )
                    }

                </div>
            </div>

        </div >
    );
}

export default Profile;