import React, { Component } from 'react';
import './Speakers.css';
import Title from '../../Title';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import SpeakerBio from './SpeakerBio';
import '../../../Global Stylesheets/lw01_css_032818mm.css';

class Speaker extends React.Component {
    render() {
        return (
            <div id="speakersPageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <div className="header-region">
                    <Header navTextColor="black" pageClass="speakers"/>
                </div>
                <div className="w3-row">
                        <div className="w3-col l1">
                            <div className="speaker-alphabet-listing">
                                <h4 className="speakers" id="alphaShortcuts"> <a href="#af">A - F</a> &mdash; <a href="#gm">G - M</a> &mdash; <a href="#nz">N - Z</a></h4>
                        </div>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                            <div className="speaker-shortcuts-region">
                                <h4 className="speakers" id="speakerShortcuts"><a href="#berrizheitia">Berrizheitia</a> - <a href="#vanboxel">van Boxel</a> -  <a href="#corner">Corner</a> - <a href="#descombes">Descombes</a> - <a href="#garland">Garland</a> - <a href="#geuze">Geuze</a> - <br />
                                <a href="#girot">Girot</a> - <a href="#imbert">Imbert</a> - <a href="#jones">Jones</a> - <a href="#koreman">Koreman</a> - <a href="#latz">Latz</a> - <a href="#lee">Lee</a> - <a href="#lister">Lister</a> - <a href="#orff">Orff</a> -<br />
                                <a href="#randall">Randall</a> - <a href="#redman">Redman</a> - <a href="#robbins">Robbins</a> -  <a href="#seavittnordenson">Seavitt Nordenson</a> - <a href="#waldheim">Waldheim</a> -<br />
                                <a href="#white">White</a> - <a href="#yu">Yu</a>
                                </h4>
                            </div>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>



                    <div className="w3-row">
                        <div className="w3-col l1">
                            <Title title='speakers' className='speakers' style={{marginLeft: '28px;'}}/>
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
                        

                <div className="speaker-body" id="speakerBody">
                        <div className="individual-speaker name-column" >
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1">
                                <div className="sp-name">
                                    <h3>Firstname Lastname</h3>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-img-region">
                                <img className="speaker-image" src={require("../../Assets/Speaker Images/Corner.jpg")} alt="some speaker" />
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1">
                                <div className="speaker-desc">
                                    <p>Some text goes here</p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Speaker;