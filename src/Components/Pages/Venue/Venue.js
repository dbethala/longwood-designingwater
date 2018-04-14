import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title';
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import '../../../Global Stylesheets/w3.css'
import './Venue.css';

class Venue extends React.Component {
    render() {
        return (
            <div className="venuePageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
               <div className="header-region">
                    <Header navTextColor="black" pageClass="venue"/>
                </div>
                <div className="w3-row">
                        <div className="w3-col l1 venue-links">
                            <h4 className="venue venue-links"><a href="#directions">Directions</a> &mdash; <a href="#parking">Parking</a> &mdash; <a href="#accommodations">Accommodations</a> &mdash; <a href="#meals">Meals</a></h4>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                            <Title title="venue" className="venue"/>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>
        
        
                <div id="venueBody">
            
                <div className="venue-section-1">
                    <div className="w3-row venue-body-section-1">
                        <div className="w3-col l1 paragraph-cols"  style={{width: 'auto'}}>
                            <p className="venue-body-paragraph-1" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore 
                             magna aliqua. Ut enim ad minim veniam, quis nostrud  
                             exercitation ullamco laboris nisi ut aliquip ex 
                             ea commodo consequat. Duis aute irure dolor in 
                             reprehenderit in voluptate velit esse cillum 
                             dolore eu fugiat nulla pariatur. Excepteur 
                             sint occaecat cupidatat non proident, sunt 
                             in culpa qui officia deserunt mollit anim 
                             id est laborum
                            </p>
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

                    <div className="w3-row venue-body-section-1">
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                        <img className="venue-iwg-img" src={require("../../Assets/262248_Italian-Water-Garden-_Albee_-Larry.jpg")}/>
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
                    </div>
        
        
                    <div className="venue-section-2">
                    <div className="w3-row venue-body-section-2">
                        <div className="w3-col l1">
                            <h2 className="venue-body-paragraph-2-title">
                                <a name="directions">Directions</a>
                            </h2>
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

                    <div className="w3-row venue-body-section-2">
                        <div className="w3-col l1 paragraph-cols" style={{width: 'auto'}}>
                            <p className="venue-body-paragraph-2">
                                Longwood Gardens is located on US Route 1, about 3 miles northeast of<br /> Kennett Square, PA.
                                <br />
                                <br />
                                How miles to Longwood?
                                    <img className="venue-map-large" src={require('../../Assets/googlemap.jpg')} alt="googlemap" />
                                <br />
                                <br />
                                Philadelphia, PA - 30<br />
                                Wilmington, DE - 12<br />
                                Valley Forge, PA - 28<br />
                                Lancaster, PA - 43<br />
                                Baltimore, MD - 72*<br />
                                Washington, DC - 110*<br />
                                New York, NY - 130<br />
                                <br />
                                *To save on time and tolls when driving in from Baltimore, MD, 
                                Washington, DC and other areas south, take I-95 North, cross the 
                                Susquehanna River, go through one toll, and immediately take Exit 93 for 
                                Route 222 (in Maryland). After exiting, turn right onto Route 222 (Jacob 
                                Tome Rd.). Almost immediately the road becomes Route 275 (Don't continue on Route 222, which turns to the left). A few miles later when 
                                Route 275 ends at a "T" intersection, make a right turn onto Route 276.
                                Take Route 276 to Route 1 North, which in approximately 4 miles 
                                crosses into Pennsylvania. Stay on Route 1 beyond Kennett Square until 
                                you reach Longwood's entrance ramp.
                                <br />
                                <br />
                                To find directions using an internet directions website, please use the following address for Longwood Gardens:
                                1001 Longwood Road, Kennett Square, PA 19348
                                <br />
                                <br />
                                If your GPS does not recognize the 1001 Longwood Road address, we suggest trying the addresses of a couple of our neighbors:
                                <br />
                                <br />
                                Longwood Fire Company<br />
                                1001 E. Baltimore Pike<br />
                                Kennett Square, PA 19348<br />
                                <br />
                                Chester County Visitor's Center<br />
                                300 Greenwood Road<br />
                                Kennett Square, PA 19348<br />
                                <br />
                                You may also enter the coordinates for the Longwood Gardens Visitor Center:<br />
                                39d52’10.25”N (latitude)
                                75d40’15.67”W (longitude)
                            </p>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                            <img className="venue-map-mobile" src={require('../../Assets/googlemap.jpg')} alt="googlemap" />
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"> </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>
                    </div>

                                 
                        <div className="venue-body-section-3">
                        <div className="w3-row venue-body-section-3">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 venue-body-parking" style={{width: 'auto'}}>
                                <h2 className="venue-body-paragraph-3-title">
                                    <a name="parking">Parking</a>
                                </h2>
                                <p className="venue-parking-paragraph">
                                We offer free on-site parking in our tree-lined lot. During peak visitation times, free off-site parking may be used if our on-site lot is full. Transportation is provided between the off-site parking and the Visitor Center entrance. Please follow the signage and note the Longwood staff members directing traffic on peak visitation days.
                                <br />
                                <br />
                                Reserved handicapped parking is available near the entrance. Guests may drop off passengers at the entrance using the double traffic lane in front of the Visitor Center.
                                <br />
                                <br />
                                Two charging stations for plug-in electric/hybrid cars are available in our Visitor Center Parking Lot. Charging stations have the industry standard “J1772” plug and operate with a 240 volt, 30 amp AC circuit. They are available to guests free of charge.
                                </p>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                        </div>
                                
                    <div className="venue-body-section-4">
                        <div className="w3-row venue-body-section-4">
                            <div className="w3-col l1 venue-body-accommodations" style={{width: 'auto'}}>
                                <h2 className="venue-body-paragraph-4-title"><a name="accommodations">Accommodations</a></h2>
                                    <p className="venue-body-paragraph-4">
                                    We offer free on-site parking in our tree-lined lot. During peak visitation times, free off-site parking may be used if our on-site lot is full. Transportation is provided between the off-site parking and the Visitor Center entrance. Please follow the signage and note the Longwood staff members directing traffic on peak visitation days.
                                    <br />
                                    <br />
                                    Reserved handicapped parking is available near the entrance. Guests may drop off passengers at the entrance using the double traffic lane in front of the Visitor Center.
                                    <br />
                                    <br />
                                    Two charging stations for plug-in electric/hybrid cars are available in our Visitor Center Parking Lot. Charging stations have the industry standard “J1772” plug and operate with a 240 volt, 30 amp AC circuit. They are available to guests free of charge.
                                    </p>
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
                        </div>

                        <div className="venue-body-section-5">
                        <div className="w3-row venue-body-section-5">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 venue-body-meals" style={{width: 'auto'}}>
                                <h2 className="venue-body-paragraph-5-title"><a name="meals">Meals</a></h2>
                                <p className="venue-meals-paragraph">
                                We offer free on-site parking in our tree-lined lot. During peak visitation times, free off-site parking may be used if our on-site lot is full. Transportation is provided between the off-site parking and the Visitor Center entrance. Please follow the signage and note the Longwood staff members directing traffic on peak visitation days.
                                <br />
                                <br />
                                Reserved handicapped parking is available near the entrance. Guests may drop off passengers at the entrance using the double traffic lane in front of the Visitor Center.
                                <br />
                                <br />
                                Two charging stations for plug-in electric/hybrid cars are available in our Visitor Center Parking Lot. Charging stations have the industry standard “J1772” plug and operate with a 240 volt, 30 amp AC circuit. They are available to guests free of charge.
                                </p>
                            </div>
                            <div className="w3-col l1"></div>
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
        );
    }
}

export default Venue;