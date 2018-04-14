import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import Event from './Event';
import './Schedule.css'

class Schedule extends React.Component {
    render() {
        return (
            <div className="schedulePageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <div className="header-region">
                    <Header navTextColor="black" pageClass="schedule"/>
                </div>
                <div className="w3-row">
                        <div className="w3-col l1">
                            <div className="scheduleDateRange">
                                <h4 className="schedule" id="date-range" style={{whiteSpace: 'nowrap'}} >Wednesday, October 17 &mdash; Thursday, October 18</h4>
                            </div>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                            <Title title="schedule" className="schedule" style={{marginRight: '20px'}}/>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>


                    <div className="schedule-body" id="scheduleBody">
                        <div className="w3-row">
                            <div className="w3-col l1">
                                <h2 className="subheading" id="schedule-date-1" style={{whiteSpace: 'nowrap'}}>Wednesday, October 17</h2>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                        <Event timestamp="3:00-3:30 pm" eventHeading="Welcome & Introductory Remarks" eventDesc={["Paul B. Redman, President and CEO of Longwood Gardens, ",<br/>,"and Mark Robbins, President and CEO of the American ",<br/>,"Academy in Rome"]} />
                        <Event timestamp="3:30-3:45 pm" eventHeading="Symposium Organization & Conceptual Framework" eventDesc={[<i>Julia Czerniak</i>,", Associate Dean and Professor, Syracuse Architecture"]} />
                        <Event timestamp="3:45-4:45 pm" eventHeading="Keynote Designing WATER: from Delphi to Disney" eventDesc={["Christophe Girot, Professor and Chair of Landscape Architecture at the Architecture",<br />," Department of the ETH, Zurich"]} />
                        <Event timestamp="4:45-5:00 pm" eventHeading="Response & Q+A" />
                        <Event timestamp="5:00-6:30 pm" eventHeading="Longwood Gardens Fountain Tour" />
                        <Event timestamp="6:30-8:00 pm" eventHeading="Opening Dinner" />
                        <Event timestamp="8:00-9:00 pm" eventHeading="Fountain Show" /> 
                </div>
                <Footer />
            </div>
        );
    }
}

export default Schedule;