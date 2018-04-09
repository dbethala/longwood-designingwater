
//Dependencies and Components
import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

//Stylesheets
import '../../../Global Stylesheets/w3.css';
import './Home.css';
import '../../../Global Stylesheets/Global.css';
import '../../../Global Stylesheets/Fonts.css';
import '../../../Global Stylesheets/lw01_css_032818mm.css';

//Assets
import LongwoodLogo from '../../Assets/LG-Logo-lockup in white, no background.png';
import AARLogo from '../../Assets/logo-AAR-black.png';
import LongwoodLogoForBody from '../../Assets/LG-Logo-lockup_forweb.png';



class Home extends React.Component {
    render() {
        return (
            <div className="homePage">
                <div className="homepage-banner">
                    <div className="header-region">
                        <Header/>
                    </div>                
                    <div className="w3-row welcome-banner">
                        <div className="w3-col col1">
                            <h1 className="welcome-banner-text" id="designing">designing <br /></h1>
                        </div>
                        <div className="w3-col col2"></div>
                        <div className="w3-col col3"></div>
                        <div className="w3-col col4">
                            <h2 className="heading-date" style={{whiteSpace: 'nowrap'}}>October 17-18, 2018</h2>
                        </div>
                        <div className="w3-col col5"></div>
                        <div className="w3-col col6"></div>
                        <div className="w3-col col7"></div>
                        <div className="w3-col col8">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                            <h1 className="welcome-banner-text" id="water">water
                            </h1></div>
                        <div className="w3-col col9"></div>
                        <div className="w3-col col10"></div>
                        <div className="w3-col col11"></div>
                        <div className="w3-col col12"></div>
                    </div>
                </div>
                <div className="w3-row">
                    <div className="w3-col m2 w3-green w3-center"><p>m2</p></div>
                    <div className="w3-col m2 w3-red w3-center"><p>m2</p></div>
                    <div className="w3-col m2 w3-blue w3-center"><p>m2</p></div>
                    <div className="w3-col m2 w3-dark-grey w3-center"><p>m2</p></div>
                    <div className="w3-col m2 w3-black w3-center"><p>m2</p></div>
                    <div className="w3-col m2 w3-purple w3-center"><p>m2</p></div>
                    </div> 
                <div className="w3-row body-section-1">
                        <div className="w3-col col1"></div>
                        <div className="w3-col col2"></div>
                        <div className="w3-col col3"></div>
                        <div className="w3-col col4">
                        <h3 className="body-paragraphs" id="home-intro-1" style={{whiteSpace: 'nowrap'}}>
                            Water is the most compelling and consquential design matter of<br/>
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
                        </div>
                        <div className="w3-col col5"></div>
                        <div className="w3-col col6"></div>
                        <div className="w3-col col7"></div>
                        <div className="w3-col col8"></div>
                        <div className="w3-col col9"></div>
                        <div className="w3-col col10"></div>
                        <div className="w3-col col11"></div>
                        <div className="w3-col col12"></div>
                    </div>
                <div className="w3-row body-section-2">
                        <div className="w3-col col1">
                            <h2 className="subheading" style={{whiteSpace: 'nowrap'}}>From the Curator</h2>
                            <p className="body-paragraphs" id="home-intro-2">
                            </p>
                        </div>
                        <div className="w3-col col2"></div>
                        <div className="w3-col col3"></div>
                        <div className="w3-col col4"></div>
                        <div className="w3-col col5"></div>
                        <div className="w3-col col6"></div>
                        <div className="w3-col col7"></div>
                        <div className="w3-col col8"></div>
                        <div className="w3-col col9"></div>
                        <div className="w3-col col10"></div>
                        <div className="w3-col col11"></div>
                        <div className="w3-col col12"></div>
                    </div>

                    <div className="w3-row organizer-section">
                        <div className="w3-col col1"></div>
                        <div className="w3-col col2"></div>
                        <div className="w3-col col3"></div>
                        <div className="w3-col col4"></div>
                        <div className="w3-col col5">
                            <h2 className="subheading" id="orgaznizerHeading">Organizers</h2>
                            <div className="longwood-description">
                                <img src={LongwoodLogoForBody} className="logo" id="homePageOrganizerLongwoodLogo" alt="Longwood Gardens" />    
                                <p className="organizer-description" id="longwoodDescText">
                                </p>
                            </div>

                            <div className="aar-description">
                                <img src={AARLogo} className="logo" id="homePageOrganizerAARLogo"/>
                                <p className="organizer-description" id="aarDescText">
                                </p>
                            </div>
                        </div>
                        <div className="w3-col col6"></div>
                        <div className="w3-col col7"></div>
                        <div className="w3-col col8"></div>
                        <div className="w3-col col9"></div>
                        <div className="w3-col col10"></div>
                        <div className="w3-col col11"></div>
                        <div className="w3-col col12"></div>
                    </div>
                <div className="footer-region">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;