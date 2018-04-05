import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title';

class Venue extends React.Component {
    render() {
        return (
            <div class="venuePageWrapper">
                <Header />
                <div className="page-title">
                    <h1 className="page-title venue">Venue</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Venue;