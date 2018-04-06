import React, {Component} from 'react';
import '../../Global Stylesheets/Fonts.css';
import { Link } from 'react-router-dom';
import './Header.css'
import '../../Global Stylesheets/lw01_css_032818mm.css'
import '../../Global Stylesheets/Global.css'

class Header extends React.Component {
    render() {
        return (
            <div className="site-header">
                <title>Designing Water</title>
                <div className="row">
                    <div className="col-1"></div>
                        <h3 className="site-title">
                            <Link id="designing-water-header-text" to="/">Designing Water</Link>
                        </h3>
                    <div className="col-2"></div>
                    <div className="col-3"></div>
                    <div className="col-4"></div>
                    <div className="col-5"></div>
                    <div className="col-6">
                    <nav>
                    <ul>
                        <h3>

                            <li><Link className="header-link" to="/schedule">Schedule</Link></li>
                            <li><Link className="header-link" to="/speakers">Speakers</Link></li>
                            <li><Link className="header-link" to="/venue">Venue</Link></li>
                            <li><Link className="header-link" to="/register">Register</Link></li>
                        </h3>
                    </ul>
                </nav></div>
                    <div className="col-7"></div>
                    <div className="col-8"></div>
                    <div className="col-9"></div>
                    <div className="col-10"></div>
                    <div className="col-11"></div>
                    <div className="col-12"></div>
                </div>
            </div>
        )
    }
}

export default Header;