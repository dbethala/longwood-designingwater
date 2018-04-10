import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    render () {
        return (
            <nav>
                <ul>
                    <h3>

                        <li><Link className="header-link to-schedule" to="/schedule" style={{color: this.props.navTextColor}}>Schedule</Link></li>
                        <li><Link className="header-link to-speakers" to="/speakers" style={{color: this.props.navTextColor}}>Speakers</Link></li>
                        <li><Link className="header-link to-venue" to="/venue" style={{color: this.props.navTextColor}}>Venue</Link></li>
                        <li><Link className="header-link to-register" to="/register">Register</Link></li>
                    </h3>
                </ul>
            </nav>
        );
    }
}

export default Navigation;