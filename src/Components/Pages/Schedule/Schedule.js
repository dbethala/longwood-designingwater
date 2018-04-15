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
                        <Event day="Wednesday" timestamp="3:00-3:20 pm" eventHeading="Welcome" eventDesc={["Paul B. Redman, President and CEO of Longwood Gardens, ",<br/>,"and Mark Robbins, President and CEO of the American ",<br/>,"Academy in Rome"]} />
                        <Event day="Wednesday" timestamp="3:20-3:40 pm" eventHeading="Introductory Remarks" eventDesc={["Julia Czerniak, Associate Dean and Professor, Syracuse Architecture ",<br/>,<br/>,"Chief Curator Julia Czerniak will provide an overview of the two days of lectures, tours, and experiences as she lays out the framework for the symposium."]} />
                        <Event day="Wednesday" timestamp="3:45-5:00 pm" eventHeading="Captive Waters: From Delphi to Disney" eventDesc={["Christophe Girot, Professor and Chair of Landscape Architecture at the Architecture Department of the ETH, Zürich",<br />, <br />,"Join Professor Christophe Girot as he launches the symposium with a keynote lecture that guides us through the history of designed water as not only a life source, but as the fabric of civilization and culture. Drawing from the scale of the garden to that of the regional system, and from ancient civilizations to contemporary misc-en-scenes, Girot will sketch the complex issues and amazing opportunities that Designing Water entails."]} />
                        <Event day="Wednesday" timestamp="5:00-6:30 pm" eventHeading="Tour of the Main Fountain Garden" eventDesc={"Nowhere else in the world is there a setting that marries fountains, theater, and garden, establishing Longwood Gardens’ Main Fountain Garden as the finest performance fountain in the world. Explore this garden that combines classic landscape design with art, innovation, technology, and extraordinary fountains. Discover more than 1,700 fountain jets, a stunning grotto, and the latest technology for lighting and design, and get a behind-the-scenes look at the infrastructure that supports this engineering marvel. Thanks to the dream team of Beyer Blender Belle, West 8, Fluidity, LePore & Sons, La Observatoire, and Bancroft Construction, this garden recently underwent a $94 million revitalization opening last summer to record crowds and critic acclaim. "}/>
                        <Event day="Wednesday" timestamp="6:30-8:00 pm" eventHeading="Welcome Reception and Dinner" eventDesc={"Dine amid thousands of blooms in Longwood’s grand 4.5-acre Conservatory with new friends and long-standing colleagues. A truly magical experience, the opening dinner promises to deliver culinary excellence akin to the horticulture that you are surrounded by. "}/>
                        <Event day="Wednesday" timestamp="8:80-9:00 pm" eventHeading="Illuminated Fountain Performance " />
                        <Event day="Wednesday" timestamp="8:00-9:00 pm" eventHeading="Fountain Show" eventDesc={"Sit back in awe as water in all shapes, sizes, and heights combines with music and infinite colors. This narrated presentation of the new and innovative features of the Main Fountain Garden will be followed by a private viewing of a full-length illuminated fountain performance."}/> 

                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1">
                                <h2 className="subheading" id="schedule-date-2" style={{whiteSpace: 'nowrap'}}>Thursday, October 18</h2>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                        <Event day="Thursday" timestamp="8:15-9:00 am" eventHeading="Continental Breakfast" eventDesc="Start the day with coffee, tea, and a light breakfast in an unparalleled setting." />
                        <Event day="Thursday" timestamp="9:00-9:15 am" eventHeading="Welcome" eventDesc={["Paul B. Redman, President and CEO of Longwood Gardens",<br />,"Mark Robbins, President and CEO of the American Academy in Rome"]} />
                        <Event day="Thursday" timestamp="9:15-11:15 am" eventHeading="Pleasure, People & Other Populations" eventDesc=
                        {
                            [<i>Pleasure, People & Other Populations</i>," explores the relationship between users, both human and non-human, and the benefits and pleasures of designed water environments.  From the visual effects of water display to the cooling impact of interactive features, from  watery public parks that embrace biodiversity to civic spaces of community engagement, and from the poetry of renaturalized rivers to the performance of water infrastructure that deepen our thinking about the environment, designed water has historically served different purposes. This session expands on notions of users and use. Join Dorothée Imbert, Professor, Hubert C. Schmidt '38 Chair and Section Head, Landscape Architecture Section, Knowlton School, Ohio State University as she sets the framework for a discussion of use, reception and audience, which is illuminated by a diverse set of case studies. ",
                            <br />,
                            <br />,
                            "Case studies presented by:",<br/>,
                            <br />,
                            <ul className="case-studies" style={{marginLeft: '20px'}}> 
                                <li className="case-studies-list-item" style={{display: "list-item", listStyleType: "disc"}}>Kate Orff, founder and design director of SCAPE Landscape Architects, Associate Professor and Director, Urban Design Program, at Columbia GSAPP</li> 
                                <li className="case-studies-list-item" style={{display: "list-item", listStyleType: "disc"}}>Mary Margaret Jones, President and Sr. Principal, Hargreaves Associates</li> 
                                <li className="case-studies-list-item" style={{display: "list-item", listStyleType: "disc"}}>Georges Descombes, Professor of Architecture, University of Geneva; practicing architect, Geneva</li>
                            </ul>,
                        <br />,
                        <br />,
                        "Response by Nina-Marie Lister Associate Professor. Questions and Answers to follow."]} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Schedule;