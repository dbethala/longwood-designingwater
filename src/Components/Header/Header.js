import React, {Component} from 'react';
import Navigation from '../Navigation';
import '../../Global Stylesheets/w3.css';
import '../../Global Stylesheets/Fonts.css';
import {Link} from 'react-router-dom';
import './Header.css'
import '../../Global Stylesheets/lw01_css_032818mm.css';
import '../../Global Stylesheets/Global.css';
import {menuCollapsed} from '../Assets/menu-black.png';
import {menuOpen} from '../Assets/menu-black.png';
import TitleText from './TitleText';

class Header extends React.Component {
    render() {
        return (
            <div className="site-header">
                <TitleText navTextColor={this.props.navTextColor}/>
                <Navigation navTextColor={this.props.navTextColor} pageClass={this.props.pageClass}
                            className="nav-large-screen" id="navLarge"/>
            </div>
        )
    }
}

export default Header;