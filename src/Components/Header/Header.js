import React, { Component } from 'react';
import '../../Global Stylesheets/Fonts.css'
import ReactFontFace from 'react-font-face';
import patron from '../../Global Stylesheets/Fonts/PatronTRIAL-Regular.otf';

const styles = {
    main: {
        fontFamily: 'Patron'
    }
}

class Header extends React.Component{
    render() {
        return (
            <div className="site-header">
                <title>Designing Water</title>
                <div style={ styles.main }>
                <h1 className="site-title">Designing Water</h1>
                </div>
            </div>
        )
    }
}

export default Header;