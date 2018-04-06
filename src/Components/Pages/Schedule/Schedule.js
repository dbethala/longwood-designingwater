import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'
import '../../../Global Stylesheets/lw01_css_032818mm.css'
import './Schedule.css'

class Schedule extends React.Component {
    render() {
        return (
            <div className="schedulePageWrapper">
                <Header />
                <div className="scheduleDateRange">
                <h4 className="schedule" id="date-range">Wednesday, October 17-Thursday, October 18</h4>
                </div>
                <Title title="schedule" className="schedule" />
                <Footer />
            </div>
        );
    }
}

export default Schedule;