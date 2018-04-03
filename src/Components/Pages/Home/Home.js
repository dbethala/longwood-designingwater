import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Home.css';
import '../../../Global Stylesheets/Global.css'
import '../../../Global Stylesheets/Fonts.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends React.Component {
    render() {
        return (
            <div className="homeDivWrapper">
                <Header />
            <Grid fluid>
                <Row>
                    <div> <Col xs={6} md={8} lg={18} />a
                    b
                    c
                    d</div>
                    <div> <Col xs={6} md={8} lg={18} />a
                        b
                        c
                        d</div>
                </Row>
            </Grid>
            <Footer/>
            </div>
        );
    }
}

export default Home;