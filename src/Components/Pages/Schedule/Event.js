import React from 'react';

class Event extends React.Component {
    render() {
        return (
            <div className="w3-row">
            <div className="w3-col l1">
                <p className="schedule timestamp">{this.props.timestamp}</p>
            </div>
            <div className="w3-col l1"></div>
            <div className="w3-col l1">
                <div className="event">
                    <h3 className="event-title">{this.props.eventHeading}</h3>
                    <p className="event-desc">
                        {this.props.eventDesc}
                    </p>
            </div>
            </div>
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
        );
    }
}

export default Event;