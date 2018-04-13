import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    constructor() {
        super();
        this.mToggle = this.menuToggle.bind(this);
        this.state = ({color: 'white'});
    }

    updateDimensions(){
        if (992 < window.innerWidth) {
            document.getElementsByTagName('nav')[0].style.display = 'block';
        }
    } /*
    componentWillMount(event) {
        this.updateDimensions();
    }*/

    componentDidMount(event) {
        window.addEventListener("resize", this.updateDimensions);
        var menuicon = document.getElementsByClassName('mobile-nav-closed')[0];
        console.log(menuicon);
        if (menuicon.className === 'mobile-nav-closed-black') {
            this.setState({color: 'black'});
            } else { 
                this.setState({color: 'white'});
        }
    }

    componentWillUnmount(event) {
        window.removeEventListener("resize", this.updateDimensions);
    }
    menuToggle (event) {
        var navItem = document.getElementsByTagName('nav')[0];
        if ('block' === navItem.style.display) {
            navItem.style.display = 'none';
        } else {
            navItem.style.display = 'block';
            navItem.className = navItem.className + ' menu-hidden';
        }

    }

    render () {
        return (
            <div className="nav-wrapper">
                <img className="mobile-nav-closed mobile-nav-closed-black" onClick={this.mToggle} id="mobileNavBlack" src={require('./Assets/menu-black.png')} alt="menu-icon" />
                <img className="mobile-nav-closed mobile-nav-clsoed-white" onClick={this.mToggle} id="mobileNavWhite" src={require('./Assets/menu-white.png')} alt="menu-icon" />
                <img className="mobile-nav-open" onClick={this.mToggle} id="mobileNavOpen" src={require('./Assets/close.png')} alt="close-menu" />
                <nav className="nav-large-screen">
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

export default Navigation;