import React from 'react';
import Berrizheitia from '../../Assets/Speaker Images/Anita_Berrizbeitia.jpeg';
import VanBoxelKoreman from '../../Assets/Speaker Images/Koreman and van Boxel.jpg';
import Corner from '../../Assets/Speaker Images/Corner.jpg';


class SpeakerBio extends React.Component {
    render() {
        return (
            <div className="individual-speaker name-column">
                <div className="w3-row">
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1">
                        <div className="sp-name">
                            <h3>{this.props.speakerName}</h3>
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
                    <div className="w3-col l1">
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1">
                        <div className="speaker-desc">
                            <p>{this.props.speakerDescription}</p>
                            <img src={this.props.photoUrl}/>
                        </div>
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 col12"></div>
                </div>
            </div>
        );
    }
}

export default SpeakerBio;