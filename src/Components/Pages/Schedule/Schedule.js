import React, {Component} from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Title from '../../Title'
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import Event from './Event';
import './Schedule.css';
import captivewaterspdf from '../../Assets/DW Course Abstracts/DW_CaptiveWaters.pdf';
import designsonwaterpdf from '../../Assets/DW Course Abstracts/DW_DesignsOnWater.pdf';
import challengesanthropocene from '../../Assets/DW Course Abstracts/DW_ChallengeoftheAnthropocene.pdf';
import techinnovationfuturepdf from '../../Assets/DW Course Abstracts/DW_TechInnovFuture.pdf';

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
                               eventDesc="Paul B. Redman, President and CEO of Longwood Gardens and Mark Robbins, President and CEO of the American Academy in Rome"/>
                        <Event day="Wednesday" timestamp="3:20-3:45 pm" eventHeading="Introductory Remarks"
                               eventDesc={["Julia Czerniak, Associate Dean and Professor, Syracuse Architecture ",
                                   <br/>,
                                   <br/>, "Chief Curator Julia Czerniak will provide an overview of the two days of lectures, tours, and experiences as she lays out the framework for the symposium."]}/>
                        <Event day="Wednesday" timestamp="3:45-5:00 pm"
                               eventHeading="Captive Waters: About Myths Past, Present and New"
                               eventDesc={["Christophe Girot, Professor and Chair of Landscape Architecture at the Architecture Department of the ETH, Zürich",
                                   <br/>,
                                   <br/>, "The icy peaks of the Swiss Alps, as in countless other places, are melting rapidly, inexorably sublimating into mist and torrents an incommensurate amount of cultural and natural history. For a long time, these glaciers were the preeminent founding blocks of a world vision established by the early Romantics at the onset of the industrial revolution. How does a climatic shift of this amplitude affect our understanding and practice of water in landscapes? Can lessons be learned from history, that could help us confront the overwhelming issue of climate change and its impact on our use of water? Captive waters may be looked at as traditional or new, but will undoubtedly become a major preoccupation in this century. Although water’s expression, form, and use may change drastically in years to come, we will be reminded to cope with this change in our landscape work, art, and expression.",
                                   <br/>,
                                   <br/>, "See the entire course description ", <a className="schedule-inpage" href={captivewaterspdf} target="_blank">here.</a>]}/>

                        <Event day="Wednesday" timestamp="5:00-6:30 pm" eventHeading="Tour of the Main Fountain Garden"
                               eventDesc={"Nowhere else in the world is there a setting that marries fountains, theater, and garden, establishing Longwood Gardens’ Main Fountain Garden as the finest performance fountain in the world. Explore this garden that combines classic landscape design with art, innovation, technology, and extraordinary fountains. Discover more than 1,700 fountain jets, a stunning grotto, and the latest technology for lighting and design, and get a behind-the-scenes look at the infrastructure that supports this engineering marvel. Thanks to the dream team of Beyer Blinder Belle, West 8, Fluidity, LePore & Sons, L'Observatoire, and Bancroft Construction, this garden recently underwent a $90 million revitalization, opening last summer to record crowds and critical acclaim."}/>
                        <Event day="Wednesday" timestamp="6:30-8:00 pm" eventHeading="Welcome Reception and Dinner"
                               eventDesc={"Dine amid thousands of blooms in Longwood’s grand 4.5-acre Conservatory with new friends and long-standing colleagues. A truly magical experience, the opening dinner promises to deliver culinary excellence akin to the horticulture that surrounds you. "}/>
                        {/*<Event day="Wednesday" timestamp="8:80-9:00 pm" eventHeading="Illuminated Fountain Performance "/> */}
                        <Event day="Wednesday" timestamp="8:00-9:00 pm" eventHeading="Illuminated Fountain Performance"
                               eventDesc={"Sit back in awe as water in all shapes, sizes, and heights combines with music and infinite colors. This narrated presentation of the new and innovative features of the Main Fountain Garden will be followed by a private viewing of a full-length Illuminated Fountain Performance."}/>
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
                                   eventHeading="Pleasure, People, and Other Populations"
                                   eventDesc=
                                       {
                                           ["The design of water in contemporary parks, plazas, riverfronts, and gardens draws on age-old concepts of delight, from reflecting pool to constructed wetland and from splash pad to misting environments. This presentation highlights the key objectives of designing, displaying, and interacting with water across time and scales, from spectacle to social and environmental health in four canonical examples. The political might expressed in the water management of the gardens and hunting landscape of Versailles; the celebration of shipping and hydroelectric power at the 1939 Exposition of Waters in Liège, Belgium; the recent reclamation of Zurich’s Letten canal into a public bath and conservation area; and the iconic pool of Thomas Church’s Donnell Garden in Sonoma, California all offer lessons on the expansive and hidden qualities of water landscapes. In each, concerns for humans and biodiversity, flood control, and conservation, to name a few, bring landscape designers to address the intricate interconnection of nature and culture.",
                                               <br/>,
                                               <br/>,
                                               "Join Dorothée Imbert, Professor, Hubert C. Schmidt '38 Chair and Section Head, Landscape Architecture Section, Knowlton School, Ohio State University as she sets the framework for a discussion of use, reception and audience, which is illuminated by a diverse set of case studies.",
                                               <br/>,
                                               <br/>,
                                               "Case studies presented by:", <br/>,
                                               <br/>,
                                               <li className="case-studies-list-item"
                                                   style={{display: "list-item", listStyleType: "disc"}}>Kate Orff,
                                                   Founder and
                                                   Design Director of SCAPE Landscape Architects, Associate Professor
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
                                               "Response by Nina-Marie Lister, Associate Professor, Ryerson University. Questions and answers to follow.",
                                               <br/>,
                                               <br/>, "See the entire course description ", <a className="schedule-inpage" href={designsonwaterpdf} target="_blank">here.</a> ]}/>
                            <Event day="Thursday" timestamp="11:30 am–1:00 pm"
                                   eventHeading="American Marvel: Longwood’s Legacy in the New World"
                                   eventDesc={[<i>American Marvel: Longwood’s Legacy in the New World </i>, " tells Longwood Gardens’ fascinating story through the lenses of the biographer and the landscape architect. In contrast to the imperial origins of many Old World estates, Longwood is a quintessentially American Garden, fundamentally breaking with the past. Made by many hands over a century, aggregating cultures, narratives and influences, all while embracing new technologies and ever outdoing the Gardens’ past, Longwood is emblematic of Pierre du Pont’s distinctly American spirit. Longwood’s expansion and reinvention have continued over the last decade as renowned landscape architecture firm West 8 has led a 40-year master plan and the Main Fountain Garden redesign. West 8’s twin outsider / insider approach sought guidance from universal relationships between humans and topography, cultivation and instinct, and intuitive orientation within the landscape, while simultaneously inviting in the 21st century—in program, design, and spirit. Join ",<b>Colvin Randall, P.S. du Pont Fellow</b>,", who will share the incredible story of Pierre S. du Pont (1870-1954), who created Longwood while heading up first the DuPont Company then General Motors. Building upon the legacy of du Pont, ",<b>Adriaan Geuze</b>,", Design Director and Founding Partner of West 8, will discuss the revelations, designs, and theoretical underpinnings of West 8’s work at Longwood.",
                                       <br/>, <br/>,
                                       <li className="case-studies-list-item" style={{display: "list-item", listStyleType:"disc"}}>Colvin Randall, P.S. du Pont Fellow, Longwood Gardens</li>,
                                       <li className="case-studies-list-item" style={{display: "list-item", listStyleType:"disc"}}>Adriaan Geuze, Founding Partner, Design Director, West 8 urban design & landscape architecture</li>,
                                        <br />,

                                       <i>A buffet lunch will be served.</i>]}/>
                            <Event day="Thursday" timestamp="1:15– 3:15 pm"
                                   eventHeading="Shaping Civic Space: Challenges of the Anthropocene" eventDesc={[
                                    "Flooding, storm surge, drought, and contamination occur with increased regularity and continue to be primary drivers of landscape architectural projects throughout the world. Hybrid approaches that combine functionality with narrative, strong visual identity, and symbolic references characterize the best contemporary practices for responding to such issues, and those committed to experimentation and innovation. This session will explore what such hybrid approaches entail, and how contemporary designers seek to integrate the civic dimension of social life into the mandates for flood control, the sensible provision of water and, when needed, its remediation. It will also explore how contemporary practices work beyond the technical to produce memorable landscapes that support both long-term resilience and the construction of collective experience.",
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
                                    Landscape Architecture at PKU, Founding Partner, Turenscape </li>,
                                <li className="case-studies-list-item"
                                    style={{display: "list-item", listStyleType: "disc"}}>Kristian Koreman and Elma van
                                    Boxel,
                                    ZUS (Zones Urbaines Sensibles) </li>,
                                <li className="case-studies-list-item"
                                    style={{display: "list-item", listStyleType: "disc"}}>Tilman Latz, Partner & Design
                                    Director, LATZ & Partner</li>,
                                <br/>,
                                <br/>,
                                "Response by Mason White Associate Professor, University of Toronto. Questions and answers to follow.",
                                <br/>,
                                <br/>, "See the entire course description ", <a className="schedule-inpage" href={challengesanthropocene} target="_blank">here.</a>
                            ]}/>
                            <Event day="Thursday" timestamp="3:30–5:30 pm"
                                   eventHeading="Technology, Innovation, and the Future"
                                   eventDesc={[
                                       "Technology shapes both the limits and possibilities of water in landscape design. It enables us to translate the ordinary into the fantastic, the necessary into the luxurious, and the imagined into the real. Focusing on two cases in the early modern world marked by profound technological change—the territorial scaled water systems at Versailles in the 17th century, and the “aesthetic industrialization” of the German landscape in the 19th century—this presentation explores how cascading effects of technological development can lead to novel design experiments with water in the landscape. By tracing how innovations can migrate across seemingly disparate areas of technological culture to coalesce in unforeseen configurations, these historical situations indicate how we might prepare for, and attempt to shape, a future that may prove highly divergent from anything we have yet known.",
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
                                       "Response by Charles Waldheim, Professor and Director, Office for Urbanization, Harvard Graduate School of Design. Questions and answers to follow.",
                                       <br/>,
                                       <br/>, "See the entire course description ", <a className="schedule-inpage" href={techinnovationfuturepdf} target="_blank">here.</a>
                                   ]}/>
                            <Event day="Thursday" timestamp="5:30-6:15 pm"
                                   eventHeading="Roundtable Discussion: The Potentials of Water"
                                   eventDesc={["Moderated by Julia Czerniak, Associate Dean and Professor, Syracuse Architecture",
                                       <br/>,
                                       <br/>, "Conclude the event with an insightful synopsis of ", <i>Designing
                                           Water</i>, " with a discussion to include thoughts on how the two days of presentations collectively outlined the role of water in our past, in its current application, and future innovations.  The panel will include each of the keynote presenters: Christophe Girot, Dorothée Imbert, Anita Berrizbeitia, and Michael Lee, as well as Paul B. Redman and Mark Robbins."]}/>
                            <Event day="Thursday" timestamp="6:15-6:30 pm" eventHeading="Closing Remarks"
                                   eventDesc="Paul B. Redman, President and CEO of Longwood Gardens and Mark Robbins, President and CEO of the American Academy in Rome"/>
                            <Event day="Thursday" timestamp="6:30-9:00 pm" eventHeading="Self-Guided Garden Tour"
                                   eventDesc={["Following the event’s close, Longwood Gardens will remain open until 9:00 pm for symposium guests to explore on their own.",
                                       <br/>,
                                       <br/>, "Complimentary transportation to downtown Philadelphia following the conclusion of the symposium will be available on a limited basis. To secure your place, please email Director of Continuing Education Matthew Ross at ",
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
