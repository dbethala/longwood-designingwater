import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';
import '../../../Global Stylesheets/Global.css';
import '../../../Global Stylesheets/Fonts.css';
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import LongwoodLogo from '../../Assets/LG-Logo-lockup in white, no background.png';
import AARLogo from '../../Assets/aar_logo_svg.svg';
import ReactGridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';



class Home extends React.Component {
    render() {
        return (
            <div className="homePage">
                <div className="homepage-banner">
                    <div className="header-region">
                        <Header/>
                    </div>
                    <div className="welcome-banner">
                        <h1 key="a" id="designing">designing</h1>
                        <h1 key="b" id="water">water</h1>
                    </div>
                </div>
                <h3 className="body-paragraphs" id="home-intro-1">
                    Water is the msot compelling and consquential design matter of<br/>
                    the 21st century. Not just a life source of, water<br/>
                    has crucial social, cultural and symbiotic functions and plays an<br/>
                    essential role in all living systems.<br/>
                    <br/>
                    <br/>
                    International scholars and practitioners in garden design, landscape<br/>
                    architecture, urban design, and ecology convene to<br/>
                    discuss and advance concepts of and strategies for designing<br/>
                    water from the scale of singular garden feature to integrated<br/>
                    regional systems.
                </h3>

                <br/>
                <br/>

                <h2 className="subheading">From the Curator</h2>
                <p className="body-paragraphs" id="home-intro-2">
                </p>
                <div className="organizerRegion">
                    <div className="longwood-description">
                        <h2 className="subheading" id="orgaznizerHeading">Organizers</h2>
                        
                        <p className="organizer-description" id="longwoodDescText">
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="aar-description">
                        <img src={AARLogo} className="logo" id="homePageOrganizerAARLogo"/>
                        <p className="organizer-description" id="aarDescText">
                        </p>
                    </div>
                </div>
                <div className="footer-region">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;