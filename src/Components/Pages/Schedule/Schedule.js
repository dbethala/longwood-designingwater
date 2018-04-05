import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'
import '../../../Global Stylesheets/lw01_css_032818mm.css'
import './Schedule.css'

class Schedule extends React.Component {
    render() {
        return (
            <div class="schedulePageWrapper">
                <Header />
                <Title title="Schedule" className="schedule" />
                <Footer />
            </div>
        );
    }
}

export default Schedule;