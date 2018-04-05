import React, { Component } from 'react';
import './Speakers.css';
import Title from '../../Title'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

class Speaker extends React.Component {
    render() {
        return (
            <div id="speakersPageWrapper">
                <Header />
                <Title title="Speakers"/>
                <Footer />
            </div>
        )
    }
}

export default Speaker;