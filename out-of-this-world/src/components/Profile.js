import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as authService from '../services/authService';
import CardList from './Card/CardList';

const Profile = () => {

    let historyHook = useHistory();
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
        <div className="hero profile">

            <video autoPlay={true} loop>
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>


            <div className="content">
                <div className="left">

                    <div className="images">
                        {userData.image
                            ? <img src={userData.image} className="profile-img" alt="" />

                            : <img src="/images/profile.png" className="profile-img" alt="" />
                        }
                    </div>


                    <div className="wrapper">
                        <h3>Username: {userData.username}</h3>

                        <div className="email">Email: {userData.email}</div>
                        <div className="buttons">

                            <Link to={`/profile/${userData._id}/edit`}>
                                <button className="profile btn">Edit User Credentials</button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={`right  ${userData.movies.length > 0 ? "transparent" : ""}`}>
                    {userData.movies.length > 0
                        ? <CardList style={{overflow: 'visible'}} movies={userData.movies} />
                        : (<div className="no-movies">
                            <p className="no-movies">You have not created a movie yet. Why don't you create one?</p>
                            <Link to="/create"><button className="profile btn">Create Movie</button></Link>
                        </div>
                        )
                    }

                </div>
            </div>

        </div >
    );
}

export default Profile;