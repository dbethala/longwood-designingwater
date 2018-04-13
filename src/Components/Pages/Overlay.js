import React from 'react';
//import TitleText from '../Header/TitleText';
import {Link} from 'react-router-dom';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        return(
            <div className="overlay-wrapper">
                <nav className="nav-mobile-screen">
                <ul>
                        <li><Link className="header-link to-schedule" to="/schedule" style={{color: this.props.navTextColor}}>Schedule</Link></li>
                        <li><Link className="header-link to-speakers" to="/speakers" style={{color: this.props.navTextColor}}>Speakers</Link></li>
                        <li><Link className="header-link to-venue" to="/venue" style={{color: this.props.navTextColor}}>Venue</Link></li>
                        <li><Link className="header-link to-register" to="/register">Register</Link></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Overlay;