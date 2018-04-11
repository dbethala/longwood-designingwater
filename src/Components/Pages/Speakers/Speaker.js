import React, { Component } from 'react';
import './Speakers.css';
import Title from '../../Title'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import '../../../Global Stylesheets/lw01_css_032818mm.css'

class Speaker extends React.Component {
    render() {
        return (
            <div id="speakersPageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <Header />
                <div className="w3-row">
                        <div className="w3-col l1">
                            <div className="speaker-alphabet-listing">
                                <h4 className="speakers" id="alphaShortcuts"> <a href="#af">A-F</a> - <a href="#gm">G-M</a> - <a href="#nz">N-Z</a></h4>
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
                <Title title='speakers' className='speakers' />
                <Footer />
            </div>
        )
    }
}

export default Speaker;