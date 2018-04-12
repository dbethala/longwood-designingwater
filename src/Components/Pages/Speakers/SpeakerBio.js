import React from 'react';

class SpeakerBio extends React.Component {
    render(){
        return (
            <div className="w3-row" className="individual-speaker">
                <div className="w3-col l1"></div>
                <div className="w3-col l1"></div>
                <div className="w3-col l1">
                    <div className="bio-photo-name">
                        <img src={this.props.photoURL} alt={this.props.altText} /> <h3 className="speaker-name">{this.props.speakerName}</h3>
                </div>
                <div className="w3-col l1">
                    <div className="speaker-desc">
                        <p>{this.props.speakerDescription}</p>
                    </div>
                </div>
                <div className="w3-col l1"></div>
                <div className="w3-col l1"></div>
                <div className="w3-col l1"></div>
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