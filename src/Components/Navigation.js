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
            //console.log('loaded');
            //document.getElementsByTagName('nav')[0].style.display = 'none';

            //This function removes the inline style so that anything applied to it can 
            //take effect when the screen size goes down to mobile view
            document.getElementsByTagName('nav')[0].removeAttribute('style');
            
        } //else {
            //document.getElementsByTagName('nav')[0].style.display="";
            //document.getElementsByTagName('nav')[0].style.display = 'none';
        //}
    } 

    //We don't need this
    componentWillMount() {
        //this.updateDimensions();
    }
    
    //Fire updateDimension when window resizes. Load on component load
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    //Remove this event listener on component destruction
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    //Event listener for menu-close button. Adds a "display:none;" inline style
    //to the menu container. This is why we have to remove this style when we resize
    //back to desktop size. Remove the class which has the styling elements for 
    //the nav menu

    menuClose(event) {
        var navItem = document.getElementsByTagName('nav')[0];
        if (navItem.style.display === 'block') {
            navItem.style.display = 'none';
            navItem.classList.remove('menuhidden');
        }
    }

    //This event handler only ties to the menu-open button, so it never uses the 
    //'if' clause. Add the class which contains the mobile menu stylings
    menuToggle (event) {
        var navItem = document.getElementsByTagName('nav')[0];
        if ('block' === navItem.style.display) {
            navItem.style.display = 'none';
        } else {
            navItem.style.display = 'block';
            navItem.className = navItem.className + ' menuhidden';
        }

    }

    render () {
        return (
            <div className="nav-wrapper">
                <img className="mobile-nav-closed" onClick={this.mToggle} id="mobileNavClosed" src={require('./Assets/menu-' + this.state.color+'.png')} alt="menu-icon" />
                {/*<img className="mobile-nav-closed mobile-nav-closed-white" onClick={this.mToggle} id="mobileNavWhite" src={require('./Assets/menu-white.png')} alt="menu-icon" />*/}
                <nav className="nav-large-screen">
                    <div className="mobile-nav-header">
                    <Link id="designing-water-header-text-mobile-nav" to="/" style= {{whiteSpace: 'nowrap', color: "white"}}>Designing Water</Link>
                        <img className="mobile-nav-close" onClick={this.mClose} id="mobileNavClose" src={require('./Assets/close.png')} alt="close-menu" style={{zIndex: '3'}}/>
                    </div>
                    <ul>       {/* Props here are used to append the class name. This is so each page can add its own colors to each menu link */}
                            <li><Link className={"header-link to-schedule-" + this.props.pageClass} to="/schedule" /*style={{color: this.state.color}}*/>Schedule</Link></li>
                            <li><Link className={"header-link to-speakers-"+ this.props.pageClass} to="/speakers" /*style={{color: this.state.color}}*/>Speakers</Link></li>
                            <li><Link className={"header-link to-venue-" + this.props.pageClass} to="/venue" /*style={{color: this.state.color}}*/>Venue</Link></li>
                            <li><Link className={"header-link to-register-" + this.props.pageClass} to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;