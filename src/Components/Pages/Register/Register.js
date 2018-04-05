import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Title from '../../Title';

class Register extends React.Component {
    render() {
        return (
            <div class="registerPage">
                <Header />
                <Title title="Register"/>
                <Footer />
                </div>
        );
    }
}

export default Register;