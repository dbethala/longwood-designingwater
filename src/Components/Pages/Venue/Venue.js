import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title';
import '../../../Global Stylesheets/lw01_css_032818mm.css'

class Venue extends React.Component {
    render() {
        return (
            <div className="venuePageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <Header />
                <Title title="Venue" className="venue"/>
                <Footer />
            </div>
        );
    }
}

export default Venue;