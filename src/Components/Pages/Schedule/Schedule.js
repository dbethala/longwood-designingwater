import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'

class Schedule extends React.Component {
    render() {
        return (
            <div class="schedulePageWrapper">
                <Header />
                <Title title="Schedule"/>
                <Footer />
            </div>
        );
    }
}

export default Schedule;