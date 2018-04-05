import React, { Component } from 'react'
import AARLogo from '../Assets/logo-AAR-white.png';
import LongwoodLogo from '../Assets/LG-Logo-lockup in white, no background.png';
import './Footer.css'

export class Footer extends Component{
    render() {
        return (
            <div className="site-footer">
                <div className="longwood-footer-logo-region">
                    <img id="longwood-footer-logo" src={ LongwoodLogo } alt="Longwood Gardens"/>
                </div>
                <div className="aar-footer-logo-region">
                    <img id="aar-footer-logo" src={ AARLogo } alt="American Academy in Rome"/>
                </div>
            </div>
        )
    }
}

export default Footer;