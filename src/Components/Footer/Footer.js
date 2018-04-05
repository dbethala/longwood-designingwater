import React, { Component } from 'react'
import AARLogo from '../Assets/logo-AAR-white.png';
import LongwoodLogo from '../Assets/LG-Logo-lockup_forweb.png'
export class Footer extends Component{
    render() {
        return (
            <div className="site-footer" style={{backgroundColor: "black"}}>
                <div className="longwood-footer-logo">
                    <img src={ LongwoodLogo } alt="Longwood Gardens"/>
                </div>
                <div className="aar-footer-logo">
                    <img src={ AARLogo } alt="American Academy in Rome"/>
                </div>
            </div>
        )
    }
}

export default Footer;