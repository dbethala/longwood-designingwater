import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
