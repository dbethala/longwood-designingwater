import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';
import '../../../Global Stylesheets/Global.css';
import '../../../Global Stylesheets/Fonts.css';
import { Responseive as ResponsiveGridLayout } from 'react-grid-layout';

class Home extends React.Component{
    render() {
        return (
            <ResponsiveGridLayout className="layout" layouts={layouts}>
                <div className="homeDivWrapper">
                    <Header />
                    <div className="body" id="homeBody">
                        <body>
                            <div className="welcome-banner">
                            </div>
                        </body>
                    </div>
                    <Footer />
                </div>
            </ResponsiveGridLayout>
        );
    }
}
export default Home;