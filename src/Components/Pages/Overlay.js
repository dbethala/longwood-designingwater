import React from 'react';
import TitleText from '../Header/TitleText';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        return(
            <div class="overlay-wrapper">
                <div className="w3-row">
                    <div className="w3-col l1">
                        <TitleText navTextColor="white" />
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
            </div>
        );
    }
}

export default Overlay;