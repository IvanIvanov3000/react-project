import React from 'react';
import { FaHome, FaSearch, FaEnvelope, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="nav-bar">
                <Link to='/home'><img src="/images/promaniq22.png" alt="logo" /></Link>
                <div className="navigation">
                    <div className="nav-items">
                        <Link to="/home"><FaHome className='icon'/> Home</Link>
                        <Link to="/catalog"><FaSearch className='icon'/> Explore</Link>
                        <Link to="/blog"><FaRegStar className='icon'/> Blog</Link>
                        <Link to="/login"><FaEnvelope className='icon'/> Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;