import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title';
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import '../../../Global Stylesheets/w3.css'
import './Venue.css';

class Venue extends React.Component {
    render() {
        return (
            <div className="venuePageMaxWidthExempt" >
            <div className="venuePageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <div className="header-region">
                    <Header navTextColor="black" pageClass="venue"/>
                </div>
                <div className="w3-row">
                    <div className="w3-col l1 venue-links">
                        <h4 className="venue venue-links"><a href="#directions">Directions</a> &mdash; <a
                            href="#parking">Parking</a> &mdash; <a href="#accommodations">Accommodations</a> &mdash; <a
                            href="#meals">Meals</a></h4>
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1">
                    <Title title="venue" className="venue"/>
                    </div>
                    <div className="w3-col l1">
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 col12"></div>
                </div>


                <div id="venueBody">

                    <div className="venue-section-1">
                        <div className="w3-row venue-body-section-1">
                            <div className="w3-col l1 paragraph-cols" style={{width: 'auto'}}>
                                <p className="venue-body-paragraph-1">
                                    Exquisite flowers, majestic trees, dazzling fountains, opulent Conservatory, starlit
                                    theatre, thunderous organ—all describe the magic of Longwood Gardens. All
                                    presentations and sessions will be held in the 4.5-acre Conservatory’s Ballroom. As
                                    a guest to the Gardens for <i>Designing Water</i>, you’ll have access to all indoor and
                                    outdoor gardens, places, and spaces. Anticipate walking the Gardens at your leisure
                                    amid fall weather conditions, so comfortable shoes and attire are recommended. We
                                    may experience cooler temperatures for the evening fountain performance as well.
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
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <img className="venue-iwg-img"
                                 src={require("../../Assets/262242_Italian-Water-Garden-_Albee_-Larry.jpg")}/>
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
                                    Longwood Gardens is located on US Route 1, about 3 miles northeast of<br/> Kennett
                                    Square, PA.
                                    <br/>
                                    <br/>
                                    How many miles to Longwood?
                                    <img className="venue-map-large" src={require('../../Assets/googlemap.jpg')}
                                         alt="googlemap"/>
                                    <br/>
                                    <br/>
                                    Philadelphia, PA - 30<br/>
                                    Wilmington, DE - 12<br/>
                                    Valley Forge, PA - 28<br/>
                                    Lancaster, PA - 43<br/>
                                    Baltimore, MD - 72*<br/>
                                    Washington, DC - 110*<br/>
                                    New York, NY - 130<br/>
                                    <br/>
                                    *To save on time and tolls when driving in from Baltimore, MD,
                                    Washington, DC and other areas south, take I-95 North, cross the
                                    Susquehanna River, go through one toll, and immediately take Exit 93 for
                                    Route 222 (in Maryland). After exiting, turn right onto Route 222 (Jacob
                                    Tome Rd.). Almost immediately the road becomes Route 275 (Don't continue on Route
                                    222, which turns to the left). A few miles later when
                                    Route 275 ends at a "T" intersection, make a right turn onto Route 276.
                                    Take Route 276 to Route 1 North, which in approximately 4 miles
                                    crosses into Pennsylvania. Stay on Route 1 beyond Kennett Square until
                                    you reach Longwood's entrance ramp.
                                    <br/>
                                    <br/>
                                    To find directions using an internet directions website, please use the following
                                    address for Longwood Gardens:
                                    1001 Longwood Road, Kennett Square, PA 19348
                                    <br/>
                                    <br/>
                                    If your GPS does not recognize the 1001 Longwood Road address, we suggest trying the
                                    addresses of a couple of our neighbors:
                                    <br/>
                                    <br/>
                                    Longwood Fire Company<br/>
                                    1001 E. Baltimore Pike<br/>
                                    Kennett Square, PA 19348<br/>
                                    <br/>
                                    Chester County Visitor's Center<br/>
                                    300 Greenwood Road<br/>
                                    Kennett Square, PA 19348<br/>
                                    <br/>
                                    You may also enter the coordinates for the Longwood Gardens Visitor Center:<br/>
                                    39d52’10.25”N (latitude)
                                    75d40’15.67”W (longitude)
                                    <br/>
                                    <br/>

                                    Symposium attendees should check in at the registration table, located in the
                                    Visitor Center as you enter Longwood Gardens. <br/> <br/>
                                    Complimentary transportation to downtown Philadelphia following the conclusion of
                                    the symposium will be available on a limited basis. To secure a spot, please email
                                    Director of Continuing Education Matthew Ross mross@longwoodgardens.org or call
                                    610.388.5247.
                                </p>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1">
                                <img className="venue-map-mobile" src={require('../../Assets/googlemap.jpg')}
                                     alt="googlemap"/>
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
                                    Longwood offers free on-site parking in a tree-lined lot. Reserved handicapped
                                    parking is available near the entrance. Two charging stations for plug-in
                                    electric/hybrid cars are available. Charging stations have the industry standard
                                    “J1772” plug and operate with a 240 volt, 30 amp AC circuit. They are available to
                                    guests free of charge.
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
                                <h2 className="venue-body-paragraph-4-title"><a name="accommodations">Accommodations</a>
                                </h2>
                                <p className="venue-body-paragraph-4">
                                    The preferred hotels for <i>Designing Water</i>, in closest proximity to Longwood Gardens,
                                    are the: <br/>
                                    <br/>
                                    Hilton Garden Inn<br/>
                                    815 E Baltimore Pike, <br/>Kennett Square, PA<br/>
                                    610.444.9100
                                    <br />
                                    <br />
                                    and the
                                    <br />
                                    <br />
                                    Fairfield Inn and Suites by Marriot Kennett Square Brandywine Valley<br/>
                                    719 E Baltimore Pike, <br/>Kennett Square, PA 19348<br/>
                                    610.444.8995
                                    <br />
                                    <br />
                                    There are also several nearby bed and breakfast and other hotels which can be
                                    accessed through the Brandywine Valley Website at (www.brandywinevalley.com)
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
                                Registration includes a buffet dinner in Longwood's Conservatory on the evening of October 17, continental breakfast on the morning of October 18, and a buffet lunch on October 18.
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
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Venue;
