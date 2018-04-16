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
            <div className="homePage" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <div className="homepage-banner">
                    <div className="header-region">
                        <Header navTextColor="white" pageClass="home"/>
                        <div style={{clear: 'both'}}/>
                    </div>
                    <div className="w3-row">
                        <div className="homepage-title-region">
                            <div className="w3-col m1">
                                <h1 className="welcome-banner-text" id="designing">designing<br/></h1>
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
                            <div className="w3-col l1"></div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-col m1">
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1">
                                <h1 className="welcome-banner-text" id="water">water</h1>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                        </div>
                    </div>

                    <div className="w3-row">
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                            <h2 className="heading-date" style={{whiteSpace: 'nowrap'}}>October 17-18, 2018</h2>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                    </div>
                </div>
                <div className="w3-row body-section-1">
                    <div className="w3-col l1 col1"></div>
                    <div className="w3-col l1 col2"></div>
                    <div className="w3-col l1 col3"></div>
                    <div className="w3-col l1 col4">
                        <h3 className="body-paragraphs" id="home-intro-1">
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
                    <div className="w3-col l1 col5"></div>
                    <div className="w3-col l1 col6"></div>
                    <div className="w3-col l1 col7"></div>
                    <div className="w3-col l1 col8"></div>
                    <div className="w3-col l1 col9"></div>
                    <div className="w3-col l1 col10"></div>
                    <div className="w3-col l1 col11"></div>
                    <div className="w3-col l1 col12"></div>
                </div>
                <div className="w3-row body-section-2">
                    <div className="w3-col l1" id="from-the-curator-col">
                        <h2 className="subheading" style={{whiteSpace: 'nowrap'}}>From the Curator</h2>
                        <p className="body-paragraphs" id="home-intro-2">
                            Please join me for a timely, inspirational, and dynamic event on the relationship of design
                            and water across time, space, and scale. Our line-up of speakers are influential academic
                            leaders and world renowned design practitioners from Asia, Europe and the Americas. Each
                            presenter will bring their local perspectives to truly global interests and concerns—such as
                            ecology, aesthetics, meaning and public space—as they assemble at Longwood Gardens in the
                            picturesque Brandywine River Valley.
                            <br/>
                            <br/>
                            The aim of this event is to recognize the significant history of designing water,
                            interrogate the social, cultural, ecologic and economic functions that designed water plays
                            in the 21st century, reconsider the leadership roles that the design disciplines can play in
                            its shaping, and imagine ways to build features and infrastructural systems that expand the
                            aesthetics of water while innovatively addressing urgent global challenges linked to climate
                            change.
                            <br/>
                            <br/>
                            In doing so, Designing Water intends to project future potentials for our disciplines while
                            educating us all about the crucial role design plays in shaping this resource. The event’s
                            diverse sessions set the coordinates for a thoughtful and lively discussion of issues that
                            confront those involved in designing, planning and managing water, as well as all of us that
                            celebrate it.
                            <br/>
                            <br/>
                            I look forward to meeting you in October!
                            <br/>
                            <br/>
                            <div className="speakers">Julia Czeniak</div>
                            Chief Curator, Designing Water
                            Associate Dean and Professor, Syracuse Architecture
                        </p>
                    </div>
                    <div className="w3-col l1 col2"></div>
                    <div className="w3-col l1 col3"></div>
                    <div className="w3-col l1 col4"></div>
                    <div className="w3-col l1 col5"></div>
                    <div className="w3-col l1 col6"></div>
                    <div className="w3-col l1 col7"></div>
                    <div className="w3-col l1 col8"></div>
                    <div className="w3-col l1 col9"></div>
                    <div className="w3-col l1 col10"></div>
                    <div className="w3-col l1 col11"></div>
                    <div className="w3-col l1 col12"></div>
                </div>

                <div className="w3-row organizer-section">
                    <div className="w3-col l1 col1"></div>
                    <div className="w3-col l1 col2"></div>
                    <div className="w3-col l1 col3"></div>
                    <div className="w3-col l1 col4"></div>
                    <div className="w3-col l1 col5" id="descriptions">
                        <h2 className="subheading" id="orgaznizerHeading">Organizers</h2>
                        <div className="longwood-description">
                            <img src={LongwoodLogoForBody} className="logo" id="homePageOrganizerLongwoodLogo"
                                 alt="Longwood Gardens"/>
                            <p className="organizer-description" id="longwoodDescText">
                                In 1906, industrialist Pierre du Pont (1870-1954) purchased a small farm near Kennett
                                Square, PA, to save a collection of historic trees from being sold for lumber. Today,
                                Longwood Gardens continues this spirit of stewardship and innovation. As one of the
                                great gardens of the world, Longwood is now home to the most significant fountain
                                collection in North America in large part due to the recent revitalization of its crown
                                jewel, the Main Fountain Garden. Encompassing 1,083 acres, Longwood combines
                                horticultural artistry with natural lands, grand architecture with diverse garden
                                design, and the performing arts with informal and formal education programs to create an
                                extraordinary experience rich with varying perspectives. Nestled in the heart of the
                                rolling hills and sublime countryside of Chester County and the Brandywine Valley,
                                Longwood is 30 miles from Philadelphia and welcomes 1.5 million guests a year.
                            </p>
                        </div>

                        <div className="aar-description">
                            <img src={AARLogo} className="logo" id="homePageOrganizerAARLogo"/>
                            <p className="organizer-description" id="aarDescText">
                                Founded in 1895 as the American School of Classical Studies in Rome, the American
                                Academy in Rome support innovative artists, writers and scholars living and working
                                together in a dynamic international community.
                                The Academy awards the Rome Prize to a select group of artists and scholars. The
                                winners, announced in the spring, are invited to Rome to pursue their work in an
                                atmosphere conducive to intellectual and artistic freedom, interdisciplinary exchange,
                                and innovation. The encounter with Rome represents now, as it has done since the
                                Academy’s inception, something unique: a chance for American artists and scholars to
                                spend significant time interacting and working in one of the oldest, most cosmopolitan
                                cities in the world. The community includes Fellows, Residents, Visiting Artists and
                                Scholars, and, come June, members of academic Summer Programs.
                            </p>
                        </div>
                    </div>
                    <div className="w3-col l1 col6"></div>
                    <div className="w3-col l1 col7"></div>
                    <div className="w3-col l1 col8"></div>
                    <div className="w3-col l1 col9"></div>
                    <div className="w3-col l1 col10"></div>
                    <div className="w3-col l1 col11"></div>
                    <div className="w3-col l1 col12"></div>
                </div>
                <div className="footer-region">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;