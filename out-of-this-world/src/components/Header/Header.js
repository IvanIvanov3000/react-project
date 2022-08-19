import React from 'react';
import { FaHome, FaSearch, FaEnvelope, FaComments,  FaUserAlt, FaCompactDisc } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import style from './Header.module.css'

import logo from '../../assets/images/promaniq22.png'

const Header = () => {
    const { user } = useAuthContext();

  

    let guestNavigation = (
        <>
            <Link to="/login"><FaEnvelope className={style.icon} /> Login</Link>
        </>
    );

    let userNavigation = (
        <>
            <Link to="/profile"><FaUserAlt className={style.icon} /> Profile</Link>
            <Link to="/create"><FaCompactDisc className={style.icon} /> Create Movie</Link>
            <Link to="/logout"><FaEnvelope className={style.icon} /> Logout</Link>
        </>
    );


    return (
        <header>
            <div className={style["nav-bar"]}>
                <Link to='/home'><img src={logo} alt="logo" /></Link>
                <div className={style.navigation}>
                    <div className={style["nav-items"]}>
                        <Link to="/home"><FaHome className={style.icon} /> Home</Link>
                        <Link to="/catalog"><FaSearch className={style.icon} /> Explore</Link>
                        <Link to="/blog"><FaComments className={style.icon} /> Blog</Link>
                        
                        {user.email
                            ? userNavigation
                            : guestNavigation
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;