import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';
import '../../../Global Stylesheets/Global.css';
import '../../../Global Stylesheets/Fonts.css';
import {Responseive as ResponsiveGridLayout} from 'react-grid-layout';
import '../../../Global Stylesheets/Fonts.css';
import '../../../Global Stylesheets/lw01_css_032818mm.css'

class Home extends React.Component {
    render() {
        return (
            <div className="homePage">
                <div className="homeDivWrapper">
                    <Header/>
                </div>
                    <div className="welcome-banner">
                        <p className="body-paragraphs" id="home-intro-1">
                            Water is the msot compelling and consquential design matter of<br/>
                            the 21st century. Not just a life source of, water<br/>
                            has crucial social, cultural and symbiotic functions and plays an<br/>
                            essential role in all living systems.<br/>
                            <br/>
                            <br/>
                            Internatioanl scholars and practitioners in garden design, landscape<br/>
                            architecture, urban design, and ecology convene to<br/>
                            discuss and advance concepts of and strategies for designing<br/>
                            water from the scale of singular garden feature to integrated<br/>
                            regional systems.
                        </p>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;