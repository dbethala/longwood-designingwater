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
                <Title title='speakers' className='speakers' />
                <Footer />
            </div>
        )
    }
}

export default Speaker;