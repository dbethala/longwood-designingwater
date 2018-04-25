import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import Event from './Event';
import './Schedule.css'

class Schedule extends React.Component {
    render() {
        return (
            <div className="schedulePageMaxWidthExempt">
                <div className="schedulePageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                    <div className="header-region">
                        <Header navTextColor="black" pageClass="schedule"/>
                    </div>
                    <div className="w3-row">
                        <div className="w3-col l1 date-range-col" style={{width: 'auto'}}>
                            <div className="scheduleDateRange">
                                <h4 className="schedule-inpage" id="date-range"><a href="#wednesday">Wednesday, October
                                    17</a> &mdash; <a href="#thursday">Thursday, October 18</a></h4>
                            </div>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">
                        </div>
                        <div className="w3-col l1">
                            <Title title="schedule" className="schedule"/>
                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1">

                        </div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1"></div>
                        <div className="w3-col l1 col12"></div>
                    </div>


                    <div className="schedule-body" id="scheduleBody">
                        <div className="w3-row">
                            <div className="w3-col l1">
                                <h2 className="subheading" id="schedule-date-1" style={{whiteSpace: 'nowrap'}}><a
                                    name="wednesday">Wednesday,
                                    October 17</a></h2>
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
                        <Event day="Wednesday" timestamp="3:00-3:20 pm" eventHeading="Welcome"
                               eventDesc="Paul B. Redman, President and CEO of Longwood Gardens, and Mark Robbins, President and CEO of the American Academy in Rome"/>
                        <Event day="Wednesday" timestamp="3:20-3:40 pm" eventHeading="Introductory Remarks"
                               eventDesc={["Julia Czerniak, Associate Dean and Professor, Syracuse Architecture ",
                                   <br/>,
                                   <br/>, "Chief Curator Julia Czerniak will provide an overview of the two days of lectures, tours, and experiences as she lays out the framework for the symposium."]}/>
                        <Event day="Wednesday" timestamp="3:45-5:00 pm"
                               eventHeading="Captive Waters: From Delphi to Disney"
                               eventDesc={["Christophe Girot, Professor and Chair of Landscape Architecture at the Architecture Department of the ETH, Zürich",
                                   <br/>,
                                   <br/>, "Join Professor Christophe Girot as he launches the symposium with a keynote lecture that guides us through the history of designed water as not only a life source, but as the fabric of civilization and culture. Drawing from the scale of the garden to that of the regional system, and from ancient civilizations to contemporary ",
                                   <i>misc-en-scenes,</i>, " Girot will sketch the complex issues and amazing opportunities that ",
                                   <i>Designing Water</i>, " entails."]}/>
                        <Event day="Wednesday" timestamp="5:00-6:30 pm" eventHeading="Tour of the Main Fountain Garden"
                               eventDesc={"Nowhere else in the world is there a setting that marries fountains, theater, and garden, establishing Longwood Gardens’ Main Fountain Garden as the finest performance fountain in the world. Explore this garden that combines classic landscape design with art, innovation, technology, and extraordinary fountains. Discover more than 1,700 fountain jets, a stunning grotto, and the latest technology for lighting and design, and get a behind-the-scenes look at the infrastructure that supports this engineering marvel. Thanks to the dream team of Beyer Blender Belle, West 8, Fluidity, LePore & Sons, L'Observatoire, and Bancroft Construction, this garden recently underwent a $90 million revitalization, opening last summer to record crowds and critical acclaim. "}/>
                        <Event day="Wednesday" timestamp="6:30-8:00 pm" eventHeading="Welcome Reception and Dinner"
                               eventDesc={"Dine amid thousands of blooms in Longwood’s grand 4.5-acre Conservatory with new friends and long-standing colleagues. A truly magical experience, the opening dinner promises to deliver culinary excellence akin to the horticulture that surrounds you. "}/>
                        {/*<Event day="Wednesday" timestamp="8:80-9:00 pm" eventHeading="Illuminated Fountain Performance "/> */}
                        <Event day="Wednesday" timestamp="8:00-9:00 pm" eventHeading="Illuminated Fountain Performance"
                               eventDesc={"Sit back in awe as water in all shapes, sizes, and heights combines with music and infinite colors. This narrated presentation of the new and innovative features of the Main Fountain Garden will be followed by a private viewing of a full-length illuminated fountain performance."}/>
                        <div className="thursday-section">
                            <div className="w3-row">
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1">
                                    <h2 className="subheading" id="schedule-date-2" style={{whiteSpace: 'nowrap'}}><a
                                        name="thursday">Thursday,
                                        October 18</a></h2>
                                </div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1"></div>
                                <div className="w3-col l1 col12"></div>
                            </div>
                            <Event day="Thursday" timestamp="8:15-9:00 am" eventHeading="Continental Breakfast"
                                   eventDesc="Start the day with coffee, tea, and a light breakfast in an unparalleled setting."/>
                            <Event day="Thursday" timestamp="9:00-9:15 am" eventHeading="Welcome"
                                   eventDesc="Paul B. Redman, President and CEO of Longwood Gardens, and Mark Robbins, President and CEO of the American Academy in Rome"/>
                            <Event day="Thursday" timestamp="9:15-11:15 am"
                                   eventHeading="Pleasure, People & Other Populations"
                                   eventDesc=
                                       {
                                           [<i>Pleasure, People & Other
                                               Populations</i>, " explores the relationship between users, both human and non-human, and the benefits and pleasures of designed water environments.  From the visual effects of water display to the cooling impact of interactive features, from  watery public parks that embrace biodiversity to civic spaces of community engagement, and from the poetry of renaturalized rivers to the performance of water infrastructure that deepen our thinking about the environment, designed water has historically served different purposes. This session expands on notions of users and use. Join Dorothée Imbert, Professor, Hubert C. Schmidt '38 Chair and Section Head, Landscape Architecture Section, Knowlton School, Ohio State University as she sets the framework for a discussion of use, reception and audience, which is illuminated by a diverse set of case studies. ",
                                               <br/>,
                                               <br/>,
                                               "Case studies presented by:", <br/>,
                                               <br/>,
                                               <li className="case-studies-list-item"
                                                   style={{display: "list-item", listStyleType: "disc"}}>Kate Orff,
                                                   founder and
                                                   design director of SCAPE Landscape Architects, Associate Professor
                                                   and
                                                   Director, Urban Design Program, at Columbia GSAPP</li>,
                                               <li className="case-studies-list-item"
                                                   style={{display: "list-item", listStyleType: "disc"}}>Mary Margaret
                                                   Jones,
                                                   President and Sr. Principal, Hargreaves Associates</li>,
                                               <li className="case-studies-list-item"
                                                   style={{display: "list-item", listStyleType: "disc"}}>Georges
                                                   Descombes,
                                                   Professor of Architecture, University of Geneva; practicing
                                                   architect,
                                                   Geneva</li>,
                                               <br/>,
                                               <br/>,
                                               "Response by Nina-Marie Lister, Associate Professor, Ryerson University. Questions and answers to follow."]}/>
                            <Event day="Thursday" timestamp="11:30 am–1:00 pm"
                                   eventHeading="The Legacy of a Great Garden"
                                   eventDesc={[<i>The Legacy of a Great
                                           Garden</i>, " underscores how one man’s vision and intense passion can instill a sense of place easy to feel yet difficult to describe. While Longwood Gardens has more fountains than any other garden in the Americas, what makes this great garden unusual is its story and the man behind it all. Founder, Pierre S. du Pont (1870-1954), designed most of the gardens throughout the property himself while simultaneously heading up two expanding corporations, DuPont and General Motors. His first fountains were very simple, but, inspired by the era’s fabulous world’s fairs and after visiting the great gardens of Italy and France, he succeeded in creating the most theatrical fountains in any American garden.  Longwood’s Italian Water Garden, Open Air Theatre, and newly revitalized Main Fountain Garden are an extraordinary showcase for the use of water in the landscape and have been enjoyed by more than 50 million visitors over the past century.  The history of these fountains, along with a reimagined vision for their embracing landscapes, is a fascinating story.",
                                       <br/>, <br/>,
                                       <li className="case-studies-list-item" style={{display: "list-item", listStyleType:"disc"}}>Adriaan Geuze, Founding Partner, Design Director, West 8</li>,
                                       <li className="case-studies-list-item" style={{display: "list-item", listStyleType:"disc"}}>Colvin Randall, P.S. du Pont Fellow, Longwood Gardens</li>, <br />,

                                       <i>A buffet lunch will be served.</i>]}/>
                            <Event day="Thursday" timestamp="1:15– 3:15 pm"
                                   eventHeading="Shaping Civic Space: Challenges of the Anthropocene" eventDesc={[
                                <i>Shaping Civic Space: Challenges of the
                                    Anthropocene</i>, " foregrounds issues of climate change that impact design, such as flooding and storm surge, drought and contamination (water affected by industry, waste and aging infrastructure). This session demonstrates how addressing these concerns can be coupled with water features and systems that are beautiful, celebratory, and meaningful.",
                                <br/>,
                                <br/>,
                                "Join Anita Berrizbeitia, Professor of Landscape Architecture and Chair of the Department of Landscape Architecture, Harvard Graduate School of Design as she sets the framework for a discussion of these opportunities and challenges, which are illuminated by remarkable case studies of built work.",
                                <br/>,
                                <br/>,
                                "Case studies presented by:", <br/>,
                                <br/>,
                                <li className="case-studies-list-item"
                                    style={{display: "list-item", listStyleType: "disc"}}>Kongjian Yu, Dean of the
                                    School of
                                    Landscape Architecture at PKU, founding partner, Turenscape </li>,
                                <li className="case-studies-list-item"
                                    style={{display: "list-item", listStyleType: "disc"}}>Kristian Koreman and Elma van
                                    Boxel,
                                    ZUS, (Zones Urbaines Sensibles) </li>,
                                <li className="case-studies-list-item"
                                    style={{display: "list-item", listStyleType: "disc"}}>Tilman Latz, Partner & Design
                                    Director, LATZ & Partner</li>,
                                <br/>,
                                <br/>,
                                "Response by Mason White Associate Professor, University of Toronto. Questions and answers to follow."
                            ]}/>
                            <Event day="Thursday" timestamp="3:30–5:30 pm"
                                   eventHeading="Technology, Innovation, and the Future"
                                   eventDesc={[
                                       <i>Technology, Innovation, and the
                                           Future</i>, " accounts and expands on the relationship of designing water to technological advances.  From the aqueducts of Rome that enabled the water features of Tivoli, to the equipment and digital advances that sponsor high-tech fountains in Dubai, Las Vegas, and Macau, to advanced thinking about the promise of soft infrastructure to promote more resilient cities. This session focuses on imagining ways to build features and infrastructural systems that expand the aesthetics of water while innovatively addressing programmatic needs, client wishes, and the urban concerns of the 21st Century.",
                                       <br/>,
                                       <br/>,
                                       "Join Michael Lee, Professor in the History of Landscape Architecture, University of Virginia as he frames a discussion on the future of water in design.",
                                       <br/>,
                                       <br/>,
                                       "Case studies presented by:",
                                       <br/>,
                                       <br/>,
                                       <li className="case-studies-list-item"
                                           style={{display: "list-item", listStyleType: "disc"}}>James Corner,
                                           Principal, James
                                           Corner Field Operations</li>,
                                       <li className="case-studies-list-item"
                                           style={{display: "list-item", listStyleType: "disc"}}>Catherine Seavitt
                                           Nordenson,
                                           Associate Professor, Landscape Architecture Program, City College of NY</li>,
                                       <li className="case-studies-list-item"
                                           style={{display: "list-item", listStyleType: "disc"}}>James A Garland, AIA,
                                           NCARB,
                                           Founder & President, Fluidity Design Consultants</li>,
                                       <br/>,
                                       <br/>,
                                       "Response by Charles Waldheim, Professor and Director, Office for Urbanization, Harvard Graduate School of Design. Questions and answers to follow."
                                   ]}/>
                            <Event day="Thursday" timestamp="5:30-6:15 pm"
                                   eventHeading="Roundtable Discussion: The Potentials of Water"
                                   eventDesc={["Moderated by Julia Czerniak, Associate Dean and Professor, Syracuse Architecture",
                                       <br/>,
                                       <br/>, "Conclude the event with an insightful synopsis of ", <i>Designing
                                           Water</i>, " with a discussion to include thoughts on how the two days of presentations collectively outlined the role of water in our past, in its current application, and future innovations.  The panel will include each of the keynote presenters: Christophe Girot, Dorothée Imbert, Anita Berrizbeitia, and Michael Lee; as well as Paul B. Redman and Mark Robbins."]}/>
                            <Event day="Thursday" timestamp="6:15-6:30 pm" eventHeading="Closing Remarks"
                                   eventDesc="Paul B. Redman, President and CEO of Longwood Gardens, and Mark Robbins, President and CEO of the American Academy in Rome"/>
                            <Event day="Thursday" timestamp="6:30-9:00 pm" eventHeading="Self-Guided Garden Tour"
                                   eventDesc={["Following the event’s close, Longwood Gardens will remain open until 9:00 pm for symposium guests to explore on their own.",
                                       <br/>,
                                       <br/>, "Complementary transportation to downtown Philadelphia following the conclusion of the symposium will be available on a limited basis. To secure your place, please email Director of Continuing Education Matthew Ross ",
                                       <a class="schedule-inpage"
                                          href="mailto:mross@longwoodgardens.org">mross@longwoodgardens.org</a>, " or call 610.388.5247."]}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Schedule;
