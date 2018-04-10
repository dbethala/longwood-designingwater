import React, {Component} from 'react';
import '../../Global Stylesheets/w3.css';
import '../../Global Stylesheets/Fonts.css';
import { Link } from 'react-router-dom';
import './Header.css'
import '../../Global Stylesheets/lw01_css_032818mm.css';
import '../../Global Stylesheets/Global.css';

class Header extends React.Component {
    render() {
        return (
            <div className="site-header">
                <title>Designing Water</title>
                <div className=" w3-row">
                    <div className="w3-col l1 col1">
                        <h3 className="site-title">
                            <Link id="designing-water-header-text" to="/" style= {{whiteSpace: 'nowrap'}}>Designing Water</Link>
                        </h3>
                    </div>
                    <div className="w3-col l1 col2"></div>
                    <div className="w3-col l1 col3"></div>
                    <div className="w3-col l1 col4"></div>
                    <div className="w3-col l1 col5"></div>
                    <div className="w3-col l1 col6">
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
                    <div className="w3-col l1 col7"></div>
                    <div className="w3-col l1 col8"></div>
                    <div className="w3-col l1 col9"></div>
                    <div className="w3-col l1 col10"></div>
                    <div className="w3-col l1 col11"></div>
                    <div className="w3-col l1 col12"></div>
                </div>
            </div>
        )
    }
}

export default Header;