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
                        <Header navTextColor="white" pageClass="home" style={{maxWidth: "1280px"/*, margin: "0 auto"*/}}/>
                        <div style={{clear: 'both'}}/>
                    </div>
                    <div className="w3-row">
                    <div className="forefront-element">
                        <div className="homepage-title-region">
                            <div className="w3-col l1">
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

                        <div className="w3-row">
                            <div className="w3-col l1">
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
                    </div>
                    </div>
                    <div className="w3-row date-location">
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                        </div>
                        <div className="w3-col l1 heading-location-col" style={{width: 'auto'}}>
                            <h2 className="heading-date">October 17&ndash;18, 2018
                            <br />
                            <br />
                                Longwood Gardens <br />Kennett Square, Pennsylvania
                            </h2>
                        </div>
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
                    <div className="w3-col l1 col4 body intro-paragraph intro-col-1" style={{width: '100%'}}>
                        <h3 className="body-paragraphs" id="home-intro-1">
                            <div id="intro-paragraph-1">
                            Water is the most compelling and consequential design matter of
                            the 21st Century. Not just a life source or a source of beauty, water
                            has crucial social, cultural, and symbolic functions and plays an
                            essential role in all living systems. </div>
                            <br/>
                            <div id="intro-paragraph-2">
                            International scholars and practitioners in garden design, landscape
                            architecture, urban design, architecture, and ecology convene to
                            discuss and advance concepts of and strategies for designing
                            water from the scale of a singular garden feature to integrated
                            regional systems. <br />
                            <br />
                            Registration open now.<br />
                            <br />
                            <h4><a className="register link-out" href="/tickets" target="_blank">Register here.</a></h4>
                            </div>
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
                <div className="w3-row body-section-2 body">
                    <div className="w3-col l1" id="from-the-curator-col">
                        <h2 className="subheading" style={{whiteSpace: 'nowrap'}}>From the Curator</h2>
                        <p className="body-paragraphs" id="home-intro-2">
                            Please join me for a timely, inspirational, and dynamic event on the relationship of design
                            and water across time, space, and scale. Our presenters are influential academic
                            leaders and world renowned design practitioners from Asia, Europe, and North America. Each
                            presenter will bring their local perspectives to truly global interests and concerns—such as
                            ecology, aesthetics, meaning, and public space—as they assemble at Longwood Gardens in the
                            picturesque Brandywine Valley.
                            <br/>
                            <br/>
                            The aim of this event is to <em>recognize</em> the significant history of designing water, 
                            <em> interrogate</em> the social, cultural, ecologic, and economic functions that designed water plays
                            in the 21st Century, reconsider the leadership roles that the design disciplines can play in
                            its shaping, and imagine ways to build features and infrastructural systems that expand the
                            aesthetics of water while innovatively addressing urgent global challenges linked to climate
                            change.
                            <br/>
                            <br/>
                            In doing so, <i>Designing Water</i> intends to project future potentials for our disciplines while
                            educating us all about the crucial role design plays in shaping this resource. The event’s
                            diverse sessions set the coordinates for a thoughtful and lively discussion of issues that
                            confront those involved in designing, planning, and managing water, as well as all of us that
                            celebrate it.
                            <br/>
                            <br/>
                            I look forward to meeting you in October!
                            <br/>
                            <br/>
                            <div className="speakers-inpage">Julia Czerniak</div>
                            Chief Curator, <i>Designing Water</i><br />
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
                    <div className="w3-col l1 col5 body" id="descriptions">
                        <h2 className="subheading" id="orgaznizerHeading">Organizers</h2>
                        <div className="longwood-description">
                            <img src={LongwoodLogoForBody} className="logo" id="homePageOrganizerLongwoodLogo"
                                 alt="Longwood Gardens"/>
                            <p className="organizer-description body" id="longwoodDescText">
                                In 1906, industrialist Pierre S. du Pont (1870-1954) purchased a small farm near Kennett
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
                            <p className="organizer-description body" id="aarDescText">
                            Founded in 1894, the American Academy in Rome is the oldest American overseas center for independent study and advanced research in
                            the arts and humanities. A not-for-profit, privately funded institution, the Academy awards the Rome Prize to a select group of artists and 
                            scholars annually, after an application process that begins each fall. The winners, selected by independent juries through a national
                            competition process, are invited to Rome the following year to pursue their work in an atmosphere conducive to intellectual and
                            artistic experimentation and interdisciplinary exchange. Awards are offered in the following categories: Literature, Music Composition,
                            Visual Arts, Architecture, Landscape Architecture, Design, and Historic Preservation and Conservation, as well as Ancient, Medieval,
                            Renaissance and Early Modern, and Modern Italian Studies. 
                            <br /> <br />
                            In addition to the Rome Prize and Italian Fellows, the Academy also invites a select group of Residents, Affiliated Fellows,
                            and Visiting Artists and Scholars to work together within this exceptional community in Rome.

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