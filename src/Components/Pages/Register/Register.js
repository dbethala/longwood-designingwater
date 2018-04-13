import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Title from '../../Title';
import '../../../Global Stylesheets/w3.css'
import '../../../Global Stylesheets/lw01_css_032818mm.css'
import '../../../Global Stylesheets/Global.css'
import './Register.css'

class Register extends React.Component {
    render() {
        return (
            <div className="registerPage" style={{maxWidth: '1280px', margin: '0 auto'}}>
            <div className="header-region">
                <Header navTextColor="black"/>
                </div>

                <div className="w3-row register-links-row">
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 register-links-region" style={{width: 'auto'}}>
                        <h4 className="register register-links"><a href="#tickets">Tickets</a> &mdash; <a href="#conted">Continuing Education Units</a></h4>
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 col12"></div>
                </div>


                <div className="w3-row register-title-row">
                    <div className="w3-col l1">
                        <Title title='register' className='register' />
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 col12"></div>
                </div>

                <div className="registerBody">
                
                    <div className="w3-row tickets-row">
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 tickets-region" style={{width: 'auto'}}>
                            <h3 className="tickets-title"><a name="tickets">Tickets</a></h3>
                            <p className="tickets-paragraph">
                            <i>Placeholder Text </i>
                                Longwood offers free on-site parking in a tree-lined lot. Reserved handicapped parking is available near the entrance. 
                                Two charging stations for plug-in electric/hybrid cars are available. Charging stations have the industry standard “J1772” 
                                plug and operate with a 240 volt, 30 amp AC circuit. They are available to guests free of charge.
                            </p>
                            <br />
                            <br />
                            <h4 className="register link-out">Register here.</h4>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>

                    <div className="w3-row conted-row">
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 conted-region" style={{width: 'auto'}}>
                            <h3 className="conted-title"><a name="conted">Coninuing Education Units</a></h3>
                            <p className="conted-paragraph">
                            <i>Placeholder Text </i>
                                Longwood offers free on-site parking in a tree-lined lot. Reserved handicapped parking is available near the entrance. 
                                Two charging stations for plug-in electric/hybrid cars are available. Charging stations have the industry standard “J1772” 
                                plug and operate with a 240 volt, 30 amp AC circuit. They are available to guests free of charge.
                            </p>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>
                </div>

                <div className="footer-region">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Register;