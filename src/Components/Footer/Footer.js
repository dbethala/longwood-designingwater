import React, { Component } from 'react';
import '../../Global Stylesheets/w3.css';
import AARLogo from '../Assets/logo-AAR-white.png';
import LongwoodLogo from '../Assets/LG-Logo-lockup in white, no background.png';
import './Footer.css';
import '../../Global Stylesheets/Global.css';

export class Footer extends Component{
    render() {
        return (
            <div className="site-footer">
                    <div className="w3-row footer-section">
                        <div className="w3-col l1 col1" style={{whiteSpace:'nowrap'}}>
                            <div className="footer-logo-region" style={{whiteSpace: 'nowrap'}}>
                                <img id="longwood-footer-logo" src={ LongwoodLogo } alt="Longwood Gardens"/><img id="aar-footer-logo" src={ AARLogo } alt="American Academy in Rome"/>
                            </div>
                        </div>
                        <div className="w3-col l1 col2"></div>
                        <div className="w3-col l1 col3"></div>
                        <div className="w3-col l1 col4"></div>
                        <div className="w3-col l1 col5"></div>
                        <div className="w3-col l1 col6"></div>
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

export default Footer;