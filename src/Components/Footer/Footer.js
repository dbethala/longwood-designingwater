import React, { Component } from 'react'
import AARLogo from '../Assets/logo-AAR-white.png';
import LongwoodLogo from '../Assets/LG-Logo-lockup in white, no background.png';
import './Footer.css'

export class Footer extends Component{
    render() {
        return (
            <div className="site-footer">
                    <div className="row footer-section">
                        <div className="col-1">
                            <div className="longwood-footer-logo-region">
                                <img id="longwood-footer-logo" src={ LongwoodLogo } alt="Longwood Gardens"/>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-3"></div>
                        <div className="col-4"></div>
                        <div className="col-5">
                            <div className="aar-footer-logo-region">
                                <img id="aar-footer-logo" src={ AARLogo } alt="American Academy in Rome"/>
                            </div>
                        </div>
                        <div className="col-6"></div>
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

export default Footer;