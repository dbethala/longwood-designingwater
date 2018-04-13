import React from 'react';
import { Link } from 'react-router-dom';
import TitleText from '../Components/Header/TitleText';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.mToggle = this.menuToggle.bind(this);
        this.mClose = this.menuClose.bind(this);
        this.state = {
            color: this.props.navTextColor
        };
    }

    updateDimensions(){
        if (992 < window.innerWidth) {
            document.getElementsByTagName('nav')[0].style.display = 'block';
        } else if (992 > window.inmnerWidth) {
            document.getElementsByClassName('nav-large-screen')
        }
    } /*
    componentWillMount(event) {
        this.updateDimensions();
    }*/

    componentDidMount(event) {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount(event) {
        window.removeEventListener("resize", this.updateDimensions);
    }

    menuClose(event) {
        var navItem = document.getElementsByTagName('nav')[0];
        if (navItem.style.display === 'block') {
            navItem.style.display = 'none';
            navItem.classList.remove('menuhidden');
        }
    }
    menuToggle (event) {
        var navItem = document.getElementsByTagName('nav')[0];
        if ('block' === navItem.style.display) {
            navItem.style.display = 'none';
        } else {
            navItem.style.display = 'block';
            navItem.className = navItem.className + ' menuhidden';
            console.log(this.state);
        }

    }

    render () {
        return (
            <div className="nav-wrapper">
                <img className="mobile-nav-closed" onClick={this.mToggle} id="mobileNavClosed" src={require('./Assets/menu-black.png')} alt="menu-icon" />
                {<img className="mobile-nav-closed mobile-nav-closed-white" onClick={this.mToggle} id="mobileNavWhite" src={require('./Assets/menu-white.png')} alt="menu-icon" />}
                <nav className="nav-large-screen">
                    <div className="mobile-nav-header">
                        <TitleText navTextColor="white"/>
                        <img className="mobile-nav-close" onClick={this.mClose} id="mobileNavClose" src={require('./Assets/close.png')} alt="close-menu" style={{zIndex: '3'}}/>
                    </div>
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