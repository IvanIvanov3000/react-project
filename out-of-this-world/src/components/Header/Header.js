import React from 'react';
import { FaHome, FaSearch, FaEnvelope, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header>
        <div class="nav-bar">
        <Link to='/home'><img src="/images/promaniq22.png" alt="logo"/></Link>
            <div class="navigation">
                <div class="nav-items">
                    {/* <i class="uil uil-times nav-close-btn"></i> */}
                    <Link to="/home"><FaHome ></FaHome> Home</Link>
                    <Link to="/catalog"><FaSearch class="uil"></FaSearch> Explore</Link>
                    <Link to="/blog"><FaRegStar></FaRegStar> Blog</Link>
                    <Link to="/login"><FaEnvelope ></FaEnvelope> Login</Link>
                </div>
            </div>
            {/* <i class="uil uil-apps nav-menu-btn"></i> */}
        </div>
    </header>
    );
};

export default Header;