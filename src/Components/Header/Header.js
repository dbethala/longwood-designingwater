import React, { Component } from 'react';
import '../../Global Stylesheets/Fonts.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
            <div className="site-header">
                <title>Designing Water</title>
                <h1 className="site-title" >
                    <Link to="/">Designing Water</Link>
                </h1>
                <nav>
                    <ul>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/speakers">Speakers</Link></li>
                        <li><Link to="/venue">Venue</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;