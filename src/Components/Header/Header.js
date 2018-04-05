import React, {Component} from 'react';
import '../../Global Stylesheets/Fonts.css';
import {Link} from 'react-router-dom';
import './Header.css'
import '../../Global Stylesheets/lw01_css_032818mm.css'

class Header extends React.Component {
    render() {
        return (
            <div className="site-header">
                <title>Designing Water</title>
                <h3 className="site-title">
                    <Link id="designing-water-header-text" to="/">Designing Water</Link>
                </h3>
                <nav>
                    <ul>
                        <h3>

                            <li><Link className="header-link" to="/schedule">Schedule</Link></li>
                            <li><Link className="header-link" to="/speakers">Speakers</Link></li>
                            <li><Link className="header-link" to="/venue">Venue</Link></li>
                            <li><Link className="header-link" to="/register">Register</Link></li>
                        </h3>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;