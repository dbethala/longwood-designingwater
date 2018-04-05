import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title';

class Venue extends React.Component {
    render() {
        return (
            <div class="venuePageWrapper">
                <Header />
                <Title title="Venue"/>
                <Footer />
            </div>
        );
    }
}

export default Venue;