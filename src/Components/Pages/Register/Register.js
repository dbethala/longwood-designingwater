import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Title from '../../Title';
import '../../../Global Stylesheets/lw01_css_032818mm.css'
import './Register.css'
import '../../../Global Stylesheets/Global.css'

class Register extends React.Component {
    render() {
        return (
            <div className="registerPage">
            <div className="header-region">
                <Header />
                </div>
                <div className="row">
                    <div className="col-1">
                        <Title title="register" className="register" />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3"></div>
                    <div className="col-4"></div>
                    <div className="col-5"></div>
                    <div className="col-6">
                        <h3 className="subheading">Tickets</h3>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-8"></div>
                    <div className="col-9"></div>
                    <div className="col-10"></div>
                    <div className="col-11"></div>
                    <div className="col-12"></div>
                </div>
                <div className="footer-region">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Register;