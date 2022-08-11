import React from 'react';
import { FaHome, FaSearch, FaEnvelope, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';


const Header = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <>
            <Link to="/login"><FaEnvelope className='icon' /> Login</Link>
        </>
    );

    let userNavigation = (
        <>
            <Link to="/my-pets"><FaEnvelope className='icon' /> Profile</Link>
            <Link to="/create"><FaEnvelope className='icon' /> Create Movie</Link>
            <Link to="/logout"><FaEnvelope className='icon' /> Logout</Link>
        </>
    );

    return (
        <header>
            <div className="nav-bar">
                <Link to='/home'><img src="/images/promaniq22.png" alt="logo" /></Link>
                <div className="navigation">
                    <div className="nav-items">
                        <Link to="/home"><FaHome className='icon' /> Home</Link>
                        <Link to="/catalog"><FaSearch className='icon' /> Explore</Link>
                        <Link to="/blog"><FaRegStar className='icon' /> Blog</Link>
                        
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