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
                <div className="site-title-schedule">
                    <h1 className="schedule"> Schedule</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Schedule;