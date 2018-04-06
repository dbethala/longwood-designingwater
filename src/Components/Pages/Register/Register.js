import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Title from '../../Title';
import '../../../Global Stylesheets/lw01_css_032818mm.css'

class Register extends React.Component {
    render() {
        return (
            <div class="registerPage">
                <Header />
                <Title title="Register" className="register" />
                <Footer />
                </div>
        );
    }
}

export default Register;