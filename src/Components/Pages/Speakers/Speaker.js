import React, { Component } from 'react';
import './Speakers.css';
import Title from '../../Title'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import '../../../Global Stylesheets/lw01_css_032818mm.css'

class Speaker extends React.Component {
    render() {
        return (
            <div id="speakersPageWrapper">
                <Header />
                <div className="page-title">
                    <h1 className="page-title speakers">Speakers</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Speaker;