import React, {Component} from 'react';
import './Speakers.css';
import Title from '../../Title';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import SpeakerBio from './SpeakerBio';
import '../../../Global Stylesheets/lw01_css_032818mm.css';
import {HashLink as HashLink} from 'react-router-hash-link'

//Images
import Czerniak from '../../Assets/Speaker Images/Czerniak2.jpg';
import Berrizheitia from '../../Assets/Speaker Images/Berrizbeitia.jpg';
import VanBoxelKoreman from '../../Assets/Speaker Images/vanBoxel.jpg';
import Corner from '../../Assets/Speaker Images/Corner2.jpg';
//No photo for Descombes
import Garland from '../../Assets/Speaker Images/Garland2.jpg';
import Geuze from '../../Assets/Speaker Images/Geuze.jpg';
import Girot from '../../Assets/Speaker Images/Girot2.jpg';
import Imbert from '../../Assets/Speaker Images/Imbert2.jpg';
import Jones from '../../Assets/Speaker Images/Margaret Jones2.jpg';
import Latz from '../../Assets/Speaker Images/Latz2.jpg';
import Lee from '../../Assets/Speaker Images/Lee2.jpg';
import Lister from '../../Assets/Speaker Images/Lister.jpg'
import Orff from '../../Assets/Speaker Images/Orff2.jpg';
import Randall from '../../Assets/Speaker Images/randall2.jpg';
import Redman from '../../Assets/Speaker Images/Redman3.jpg';
import Robbins from '../../Assets/Speaker Images/Robbins2.jpg';
import Seavitt from '../../Assets/Speaker Images/Seavitt Nordenson2.jpg';
import Waldheim from '../../Assets/Speaker Images/waldheim_headshot2.jpg';
import White from '../../Assets/Speaker Images/White2.jpg';
import Yu from '../../Assets/Speaker Images/Yu2.jpg';


class Speaker extends React.Component {
    render() {
        return (
            <div className="speakerPageMaxWidthExempt" >
            <div id="speakersPageWrapper" style={{maxWidth: '1280px', margin: '0 auto'}}>
                <div className="header-region-speakers">
                    <Header navTextColor="black" pageClass="speakers"/>
                </div>
                <div className="w3-row">
                    <div className="w3-col l1">
                        <div className="speaker-alphabet-listing">
                            <h4 className="speakers-inpage" id="alphaShortcuts"><a href="#af">A - F</a> &mdash; <a href="#gm">G
                                - M</a> &mdash; <a href="#nz">N - Z</a></h4>
                        </div>
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1">
                        <div className="speaker-shortcuts-region">
                            <h4 className="speakers" id="speakerShortcuts">
                                <a href="#czerniak">Czerniak</a> - &nbsp;
                                <a href="#berrizbeitia">Berrizbeitia</a> - <a
                                href="#vanBoxelKoreman">van Boxel</a> - <a href="#corner">Corner</a> - <a
                                href="#descombes">Descombes</a> - <a href="#garland">Garland</a> - <a
                                href="#geuze">Geuze</a> - <br/>
                                <a href="#girot">Girot</a> - <a href="#imbert">Imbert</a> - <a
                                    href="#jones">Jones</a> - <a href="#vanBoxelKoreman">Koreman</a> - <a
                                    href="#latz">Latz</a> - <a href="#lee">Lee</a> - <a href="#lister">Lister</a> - <a
                                    href="#orff">Orff</a> -<br/>
                                <a href="#randall">Randall</a> - <a href="#redman">Redman</a> - <a
                                    href="#robbins">Robbins</a> - <a href="#seavittnordenson">Seavitt Nordenson</a> - <a
                                    href="#waldheim">Waldheim</a> -<br/>
                                <a href="#white">White</a> - <a href="#yu">Yu</a>
                            </h4>
                        </div>
                    </div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1"></div>
                    <div className="w3-col l1 col12"></div>
                </div>


                <div className="w3-row">
                    <div className="w3-col l1">
                        <Title title='speakers' className='speakers' style={{marginLeft: '28px;'}}/>
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


                <div className="speaker-body" id="speakerBody">
                    <div className="individual-speaker name-column czerniak">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="czerniak"><a name="af">Julia Czerniak</a></a>
                                    </h3>
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
                            <div className="w3-col l1 speaker-img-region">
                                <img className="speaker-image czerniak" src={Czerniak} alt="Czerniak"/>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Professor & Associate Dean, Syracuse Architecture</p>
                                    <p>
                                        Julia Czerniak is Associate Dean and Professor of Architecture at Syracuse
                                        University where she teaches studios as well as seminars on landscape theory and
                                        criticism. Czerniak is educated both as an architect (Princeton University, M.
                                        Arch 1992) and landscape architect (Pennsylvania State University, BA 1984) and
                                        her research and practice draw on the intersection of these disciplines.
                                        Although the techniques, scales and products of her research vary, Czerniak’s
                                        work focuses on the physical and cultural potentials of urban landscapes. Recent
                                        design research advances landscape as a protagonist in the remaking of Rust-Belt
                                        cities, from a series of public space interventions along a derelict creek to
                                        ecologically and spatially rich streetscapes for a newly planned campus of
                                        Syracuse University. Czerniak’s work as a designer is complemented by her work
                                        as educator and writer, which in all cases advances design as a way to enable
                                        new ways of seeing, imagining, valuing and acting within our challenged
                                        anthropocentric environment.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column berrizheitia">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="berrizbeitia">Anita Berrizbeitia,
                                        ASLA</a></h3>
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
                            <div className="w3-col l1 speaker-img-region">
                                <img className="speaker-image berrizheitia-img" src={Berrizheitia} alt="berrizheitia"/>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Professor and Chair of Landscape Architecture, Harvard
                                        Graduate School of Design</p>
                                    <p>
                                        Anita Berrizbeitia is a landscape architect specializing in theory and criticism
                                        of 19th and 20th-Century public landscapes in the United States and Europe, with
                                        particular interests in material culture, design expression, and the productive
                                        functions and roles of landscape in processes of urbanization. Berrizbeitia is
                                        editor of several publications, including: <i>Urban Landscape—Critical Concepts
                                        in Built Environment Series and Michael Van Valkenburgh Associates:
                                        Reconstructing Urban Landscapes.</i> She is an award-winning author of books and
                                        essays, including: <i>Roberto Burle Marx in Caracas: Parque del Este, 1956–1961;
                                        Inside/Outside: Between Architecture and Landscape; Studies in the History of
                                        Gardens & Designed Landscapes: An International Quarterly; Center for Advanced
                                        Studies in the Visual Arts; Cultural History of Gardens—The Modern Period;
                                        Daniel Urban Kiley: The Early Gardens; Recovering Landscape; Roberto Burle Marx:
                                        Landscapes Reflected; CASE: Downsview Park Toronto; Large Parks; Retorno al
                                        Paisaje; and Hargreaves Associates: Landscape Alchemy,</i> among others. She
                                        serves on the editorial boards of JoLA, of the South American Project, and has
                                        served on major competition juries in the United States and in Chile, Ecuador,
                                        Venezuela, Argentina, and Madrid.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>


                    <div className="individual-speaker name-column vanboxel">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="vanBoxelKoreman">Elma van Boxel and Kristian
                                        Koreman</a></h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image vanBoxel-img" src={VanBoxelKoreman}
                                         alt="van Boxel and Koreman"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Founding Directors, ZUS [Zones Urbaines Sensibles]</p>
                                    <p>
                                        The partnership of Elma van Boxel and Kristian Koreman and their office, ZUS
                                        [Zones Urbaines Sensibles], develop solicited and unsolicited design and
                                        research in the fields of architecture, urban development, and landscape design.
                                        Founded in 2001, the company consists of a 28-strong international and
                                        multidisciplinary team, based in Rotterdam. ZUS works with a belief that every
                                        place has the potential to become unique and thrilling. A spatial intervention
                                        should therefore always be inspired by the specific qualities of the situation
                                        and driven by an optimistic attitude. With design for urban districts, parks,
                                        public spaces, buildings and installations ZUS contributes to a collective and
                                        sustainable future. Architecture has become marginalized in the last two decades
                                        by responding mainly to the demands of the market. ZUS reclaims the public role
                                        of the architect by making social challenges explicit by means of unsolicited
                                        architecture and architectural activism.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column corner">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="corner">James Corner, RLA, ASLA</a></h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image corner-img" src={Corner}
                                         alt="Corner"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Founding Partner and CEO, James Corner Field
                                        Operations </p>
                                    <p>
                                        James Corner is the Founding Partner and CEO of James Corner Field Operations.
                                        Corner has devoted the past 30 years to advancing the field of landscape
                                        architecture and urbanism, through his leadership on high-visibility, complex
                                        urban projects at Field Operations, as well as through teaching, public speaking
                                        and writing. Corner's work has been recognized with the National Design Award; the
                                        American Academy of Arts and Letters Award in Architecture; the AA&D Black
                                        Pencil Award; and the Chrysler Design Award. His work has been published broadly
                                        and exhibited at the New York Museum of Modern Art; the Cooper-Hewitt Design
                                        Museum; the National Building Museum; the Royal Academy of Art in London; and
                                        the Venice Biennale. His books include <i>The High Line; The Landscape
                                        Imagination; and Taking Measures Across the American Landscape.</i> Corner is an
                                        emeritus Professor of Landscape Architecture and Urbanism at the University of
                                        Pennsylvania School of Design, and serves on the Board of the Urban Design
                                        Forum.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>


                    <div className="individual-speaker name-column descombes">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="descombes">Georges Descombes</a></h3>
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
                                <div className="speaker-img-region">
                                    {/*<img className="speaker-image corner-img" src={}
                                         alt="Corner"/>*/}
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Principal, Atelier Descombes Rampini</p>
                                    <p>
                                        Georges Descombes lives and works in Geneva and is principal of Atelier Descombes Rampini. He has studied architecture in Geneva, Zurich and London (AAGS). Descombes
                                        has taught at University of Geneva School of Architecture, the Berlage
                                        Institute, Harvard GSD, University of Virginia School of
                                        Architecture, Berkeley University, and Rapperswill School of Landscape Architecture,
                                        and has lectured extensively in Europe, the United States, Israel, China and South America. Among
                                        his realizations are Park in Lancy, Swiss Path, Bijlmer memorial in Amsterdam, and
                                        Parc de la Cour du Maroc in Paris. He is presently working on the River Aire
                                        restoration project in Geneva, Lyon Confluence riversides, the Ostende Green
                                        Belt Project, the Material kaai in Brussels, and the DokZuid park in Anvers,
                                        Belgium.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column garland">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="garland"><a name="gm">James A. Garland, AIA,                                      NCARB President</a></a></h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image garland" src={Garland}
                                         alt="Garland"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">President & Founder, Fluidity Design Consultants</p>
                                    <p>
                                        James Garland founded Fluidity Design Consultants in 2002 after 20 years of
                                        practice in water design, architecture, and urbanism. Garland began working in water
                                        at Wet Design as a consultant in 1986 while maintaining a private practice, then
                                        switched to full time in 1994 to ultimately become Wet’s Director of Design.
                                        Garland’s major projects included: Canal City Hakata (Fukuoka, Japan), Al Faisaliah
                                        (Riyadh, Saudi Arabia), Lisbon Expo ‘98 (Lisbon, Portugal) Millenium Park
                                        (Singapore), the Rose Garden Arena (Portland, Oregon), the Burj Al Arab (Dubai,
                                        UAE) and Water Tower Place (Chicago, Illinois). Garland has also designed
                                        water features in Kuala Lumpur, Beijing, Shanghai, Seoul,
                                        Berlin, Miami Beach, and Houston. Garland holds a Masters degree in
                                        Architecture from UCLA, with a focus in architectural design and urban design.
                                        His undergraduate degree, also in architecture, was obtained from the University
                                        of Louisiana. Garland interned at Urban Innovations Group under Charles W. Moore,
                                        FAIA, an internationally celebrated architect who was known, among many things,
                                        for his enthusiastic and skillful use of water in architecture.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column geuze">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="geuze">Adriaan Geuze, Prof., Ir., RLA, OALA</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    {<img className="speaker-image Geuze" src={Geuze}
                                         alt="Geuze"/>}
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Founding Partner, Design Director, West 8</p>
                                    <p>
                                        Adriaan Geuze, cofounder and design director of West 8, has established an
                                        enormous reputation on an international level with his visionary approach to
                                        planning and design of the built environment. Geuze, together with his office,
                                        has brought West 8 to the frontline of international urban design and landscape
                                        architecture for nearly 30 years now. As a key player in the field of landscape
                                        urbanism, nurturing landscape design's role as a powerful force in shaping our
                                        world sustainably and with sensitivity, he approaches landscape with a
                                        combination of natural inclination and urban know-how: a technique of relating
                                        contemporary culture, urban identity, architecture, public space and engineering
                                        within one design while always taking the context into account. Internationally
                                        respected as a professor in Architecture and Urban Design, Geuze frequently
                                        lectures and teaches at universities worldwide.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column girot">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="girot">Christophe Girot</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image girot" src={Girot}
                                         alt="Girot"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Head of the Institute of Landscape Architecture, Dean
                                        Elect at the Department of Architecture of the ETH in Zürich</p>
                                    <p>
                                        Christophe Girot is Professor and Chair of Landscape Architecture at the
                                        Architecture Department of the ETH in Zurich. He received a dual Masters in
                                        Architecture and Landscape Architecture from UC Berkeley and was Chair of
                                        Design at the Versailles School of Landscape Architecture. His teaching and
                                        research interests span new topological methods in landscape design, landscape
                                        perception and analysis through new media, and contemporary theory and history
                                        of landscape architecture. At the ETH he co-founded the Landscape Visualising
                                        and Modelling Laboratory (LVML) with Professor Adrienne Gret-Regamey in 2010.
                                        His professional practice focuses on large-scale landscape
                                        projects, using advanced 3D GIS techniques that contribute to the design of more
                                        sustainable landscape environments such as the Alptransit Deposit in Sigirino
                                        and the Third Rhône River Correction in the Canton of Valais. He directed an
                                        advanced design research project on the Ciliwung River in Jakarta for the ETH
                                        Future Cities Laboratory in Singapore.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column imbert">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="imbert">Dorothée Imbert</a>
                                    </h3>
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
                            <div className="speaker-img-region">
                                    <img className="speaker-image imbert" src={Imbert}
                                         alt="Imbert"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Professor, Hubert C. Schmidt Chair in Landscape
                                        Architecture, The Ohio State University</p>
                                    <p>
                                        Dorothée Imbert is the Hubert C. Schmidt ’38 Chair and head of landscape
                                        architecture at The Ohio State University. Prior to joining OSU, Imbert
                                        established the Master of Landscape Architecture program at Washington
                                        University in St. Louis, taught at Harvard University, and practiced at Peter
                                        Walker and Partners. She has lectured and written on landscape modernism. She is
                                        the author of the books <i>The Modernist Garden in France, Garrett Eckbo: Modern
                                        Landscapes for Living</i> (with Marc Treib), and <i>Between Garden and City:
                                        Landscape
                                        Modernism and Jean Canneel-Claes</i>, and editor of <i>Food and the City:
                                        Histories of
                                        Culture and Cultivation.</i> She has served on boards and juries, including
                                        Dumbarton Oaks and the Society of Architectural Historians, and organized
                                        several symposia on historical and contemporary topics. She continues to engage
                                        in research and design practice and recently completed the Novartis Square in
                                        Basel, Switzerland.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column jones">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="jones">Mary Margaret Jones, FASLA</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image jones" src={Jones}
                                         alt="Jones"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Senior Principal, Hargreaves Associates and Hargreaves
                                        Jones</p>
                                    <p>
                                        Mary Margaret Jones is Senior Principal and President of Hargreaves Associates
                                        and oversees the three offices in San Francisco, CA; Cambridge, MA; and
                                        Hargreaves Jones in New York City. The firm is a leader in the fields of
                                        landscape architecture and planning, has received more than 100 national and
                                        international awards, and is the recipient of the 2016 Cooper Hewitt Smithsonian
                                        Museum National Design Award. She has served as principal-in-charge for such
                                        award-winning projects as Discovery Green in Houston, TX; the London Olympic
                                        Parklands; the University of Cincinnati Master Plan, and the restoration of
                                        Crissy Field in San Francisco's Presidio, now a national park. Jones is the
                                        Prince Charitable Trust Fellow in Landscape Architecture of the American Academy
                                        in Rome and current Chairman of the Board of Trustees; she is also Vice
                                        President of the Board of ODC Dance in San Francisco. Jones is a past
                                        visiting critic in Landscape Architecture at the Harvard Design School; is a
                                        Fellow of the American Society of Landscape Architects; Senior Fellow of the Design
                                        Futures Council; past member of the National Advisory Council for the Mayors’
                                        Institute on City Design; past member of the Industry Advisory Group for the
                                        U.S. State Department; past Peer Professional for the General Services
                                        Administration; and Fellow of the Urban Design Forum, New York, NW. She is
                                        currently leading the firm’s work on the 70-acre park that will link downtown to
                                        the river in Oklahoma City, a new open space for MIT that will be the
                                        centerpiece of one-million square feet of new development, and the recently completed 35-acre
                                        Zaryadye Park in the heart of Moscow, adjacent to Red Square on the Moscow
                                        River.

                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column latz">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="latz">Tilman Latz</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image ltaz" src={Latz}
                                         alt="Latz"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Partner & Design Director, Latz + Partner <br/>Landscape
                                        Architect ByAK bdla, Architect ByAK, Urban Planner ByAK</p>
                                    <p>
                                        Tilman Latz has more than 20 years of professional experience in a wide variety of
                                        projects. Deeply committed to ecological urban renewal, he is also interested in
                                        the socio-political potential of combined planning strategies, the interface of
                                        architecture and landscape and the meaning of material and memory. Projects
                                        bearing his signature include the award-winning conversions of the former
                                        harbours in Bremerhaven into a new neighbourhood centre and the transformation
                                        of Turin’s largest urban industrial wasteland into Parco Dora, the conversion of
                                        the former port Rambaud in Lyon, the redevelopment of Place Flagey in Brussels,
                                        St Peter’s Square in Manchester, and the Kleiner Tiergarten Park in Berlin. When
                                        Latz was appointed to lead an interdisciplinary team to design the master plan
                                        for Crystal Palace Park in 2006, he established a branch office in London, which
                                        also completed a number of projects in the United Kingdom. He and his team are
                                        currently working in Israel, Russia, and China alongside projects in the European
                                        Union. Beyond that Latz is actively engaged in the Bavarian board of the BDLA
                                        (Federation of German Landscape Architects) and in the German Werkbund Bavaria.
                                        Latz graduated in landscape architecture from the University of Kassel in
                                        1993 and went on to study architecture in Kassel and London.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column lee">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="lee">Michael G. Lee</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image lee" src={Lee}
                                         alt="Lee"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Reuben M. Rainey Professor in the History of Landscape
                                        Architecture <br/>Associate Professor of Landscape Architecture<br/> University
                                        of Virginia School of Architecture</p>
                                    <p>
                                        Michael Lee’s research explores the intersection of philosophy, technology, and
                                        landscape design, with a particular focus on 18th- to 20th-century Germany. His
                                        recent projects include a study of the infrastructural landscapes of Peter
                                        Joseph Lenné in early 19th-Century Prussia and an analysis of landscape and
                                        gender in Weimar Germany. Lee is the author of <i>The German “Mittelweg”: Garden
                                        Theory</i> and <i>Philosophy in the Time of Kant</i>, co-editor with Mirka Beneš
                                        of <i>Clio in
                                        the Italian Garden: Twenty-First-Century Studies in Historical Methods and
                                        Theoretical Perspectives</i>, and co-editor with Kenneth I. Helphand of <i>Technology
                                        and the Garden.</i> From 2009 to 2012 Lee was a postdoctoral associate in Garden
                                        and
                                        Landscape Studies at Dumbarton Oaks in Washington, DC He has previously taught
                                        at the Harvard Graduate School of Design, the Rhode Island School of Design, and
                                        Connecticut College. Trained as a landscape architect and historian, Lee
                                        received an MLA and a Ph.D. from Harvard University and a BSLA from Texas A&M
                                        University.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column lister">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="lister">Nina-Marie E. Lister, MCIP, RPP, Honorary
                                        ASLA</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    {<img className="speaker-image lister" src={Lister}
                                         alt="Lister"/>}
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Associate Professor, Ryerson University<br/>Graduate
                                        Program
                                        Director, Urban & Regional Planning Director, Ecological Design Lab<br/>Founding
                                        Principal, PLANDFORM</p>
                                    <p>
                                        Nina-Marie Lister is Graduate Program Director and Associate Professor in the
                                        School of Urban + Regional Planning at Ryerson University in Toronto. From
                                        2010&#8211;2014, she was visiting Associate Professor of Landscape Architecture +
                                        Urban Planning at Harvard University, Graduate School of Design. A Registered
                                        Professional Planner (MCIP, RPP) trained in ecology, environmental science and
                                        landscape planning; she is the founding principal of PLANDFORM, a creative
                                        studio practice working at the nexus of landscape, ecology, and urbanism.
                                        Lister’s research, teaching and practice center on the confluence of landscape
                                        infrastructure and ecological processes within contemporary metropolitan
                                        regions, with a particular focus on resilience and adaptive systems design. At
                                        Ryerson University, Lister founded and directs the Ecological Design Lab, a
                                        collaborative innovation incubator for ecological design research and practice.
                                        She is a member of the Ryerson Urban Water Centre where she contributes work on
                                        flood-friendly design through green and blue infrastructure for resilience. She
                                        is co-editor of <i>Projective Ecologies and The Ecosystem Approach: Complexity,
                                        Uncertainty, and Managing for Sustainability,</i> and author of more than 40
                                        professional practice and scholarly publications.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column orff">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="orff"><a name="nz">Kate Orff, RLA</a></a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image orff" src={Orff}
                                         alt="Orff"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Founding Principal, SCAPE <br/>Associate Professor &
                                        Director, Urban Design Program, Columbia GSAPP</p>
                                    <p>
                                        Kate Orff is the Founder of SCAPE and a MacArthur Fellow. Orff focuses on
                                        retooling the practice of landscape architecture relative to uncertainty of
                                        climate change and fostering social life which she has explored through
                                        publications, activism, research, and projects. She is known for leading
                                        complex, creative, and collaborative work processes that advance broad
                                        environmental and social prerogatives. Orff was awarded the MacArthur Foundation
                                        ‘Genius’ Grant in 2017, the first given in the field of Landscape Architecture.
                                        She was named a 2012 United States Artist Fellow, and an <i>Elle</i> magazine “Planet
                                        Fixer,” and shared SCAPE’s design methodologies at the International TEDWomen
                                        Conference in 2010. She graduated with a bachelor’s degree with distinction in Political and
                                        Social Thought from the University of Virginia and earned a
                                        Master in Landscape Architecture from the Graduate School of Design at Harvard
                                        University. Orff is also the Director of Columbia University GSAPP’s Urban
                                        Design Program.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column randall">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="randall">Colvin Randall</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image randall" src={Randall}
                                         alt="Randall"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">P.S. du Pont Fellow, Longwood Gardens</p>
                                    <p>
                                    As the first P.S. du Pont Fellow, Colvin Randall has lectured for 40 years about Longwood Gardens, its history, magnificent garden features, the evolution of its bucolic landscape, and the performing arts in the Gardens that take place throughout the year. He is the author of six books and a DVD on Longwood Gardens including the centennial publication, Longwood Gardens: 100 Years of Garden Splendor. Randall received a B. Architectural History degree from the University of Virginia and became interested in the history of Longwood Gardens in 1973 as a Longwood Graduate Fellow researching the story of the Gardens’ fountains. He has visited several hundred European gardens, including all the gardens that inspired Pierre du Pont on his travels.  Randall has designed Longwood’s musical fountain displays since 1980 and helps oversee its fireworks displays, its huge 10,010-pipe organ, and a 62-bell carillon in the Chimes Tower.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column redman">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="redman">Paul B. Redman</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image redman" src={Redman}
                                         alt="Redman"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">President and CEO, Longwood Gardens</p>
                                    <p>
                                        Paul B. Redman is an award-winning leader of public gardens, known for his
                                        dedication to the beauty and sustainability of gardens, and to the training of
                                        future generations of horticulture professionals. A hallmark of Redman’s
                                        leadership is building a culture of planning to propel a shared vision forward.
                                        As the President and Chief Executive Officer of Longwood Gardens for the last 11
                                        years, Redman has implemented institutional and strategic reforms that have
                                        positioned the Gardens as a premier horticultural, cultural, and educational
                                        institution of the 21st Century, while respecting the values of its founder,
                                        Pierre S. du Pont. Most recently and notably, Redman led one of the largest projects
                                        in Longwood’s history: the $90 million revitalization of the Main Fountain
                                        Garden which reopened in May 2017.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>

                    <div className="individual-speaker name-column robbins">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="robbins">Mark Robbins</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image robbins" src={Robbins}
                                         alt="Robbins"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">President and CEO, American Academy in Rome</p>
                                    <p>
                                    Mark Robbins, an architect, artist, educator, and longtime advocate for art and design, is President of the American Academy in Rome -- the  preeminent overseas center for independent study and advanced research in the arts and humanities. <br /> <br />

He was previously Executive Director of the International Center of Photography in New York, an institution dedicated to the presentation and interpretation of the reproduced image. From 2004&#8211;2012, as Dean and Professor at Syracuse University School of Architecture and University Senior Advisor on Architecture and Urban Initiatives, he had a transformative role on both the school and the city. While Director of Design at the National Endowment for the Arts, from 1999&#8211;2002,  Robbins led the development of an aggressive program to strengthen the presence of innovative design in the public realm, which included work with elected officials through the Mayors Institute on City Design and giving more than 100 public presentations that promoted design. From 1993-1999, he was Curator of Architecture at the Wexner Center for the Arts, where he created a laboratory for innovative work, and Associate Professor at the Knowlton School of Architecture at Ohio State University.  He has been a visiting professor at the University of Virginia, Southern California Institute of Architecture (SCI-Arc), Georgia Institute of Technology and the Harvard Graduate School of Design.  

                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column seavitt">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="seavittnordenson">Catherine Seavitt Nordenson,
                                        ASLA,
                                        AIA, FAAR </a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image seavitt" src={Seavitt}
                                         alt="Seavitt Nordenson"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Associate Professor of Landscape Architecture, The City
                                        College of New York <br/>Principal, Catherine Seavitt Studio</p>
                                    <p>
                                        Catherine Seavitt Nordenson is an associate professor of landscape architecture
                                        at The City College of New York and principal of Catherine Seavitt Studio, New
                                        York. A registered architect and landscape architect, she is a graduate of the
                                        Cooper Union and Princeton University, a fellow of the American Academy in Rome,
                                        and a recipient of a Fulbright Fellowship for research in Brazil. Her research
                                        includes design adaptation to climate change in urban environments, as well as
                                        the novel transformation of landscape restoration practices. She is also
                                        interested in the intersection of political power, environmental activism, and
                                        public health, particularly as seen through the design of public space and
                                        policy. Her books include <i>Structures of Coastal Resilience; Depositions:
                                        Roberto
                                        Burle Marx and Public Landscapes under Dictatorship; Corridor Workbook: Design
                                        Initiative for RPA’s Fourth Regional Plan; Waterproofing New York;</i> and <i>On the
                                        Water: Palisade Bay.</i> Her work has been published in <i>Artforum, Avery
                                        Review,
                                        Harvard Design Magazine, JoLA, LA+, Praxis,</i> and <i>Topos.</i>
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column waldheim">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="waldheim">Charles Waldheim</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image waldheim" src={Waldheim}
                                         alt="Waldheim"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">John E. Irving Professor and Director, Office for
                                        Urbanization <br/>Harvard University Graduate School of Design</p>
                                    <p>
                                        Charles Waldheim is a North American architect, urbanist, and educator.
                                        Waldheim’s research examines the relations between landscape, ecology, and
                                        contemporary urbanism. He coined the term ‘landscape urbanism’ to describe the
                                        emergent discourse and practices of landscape in relation to design culture and
                                        contemporary urbanization. On these topics, he is author of <i>Landscape as
                                        Urbanism: A General Theory</i> and editor of <i>The Landscape Urbanism
                                        Reader.</i> Waldheim
                                        is the John E. Irving Professor at Harvard University’s Graduate School of Design
                                        where he directs the School’s Office for Urbanization. He is the recipient of the
                                        Rome Prize Fellowship from the American Academy in Rome; the Visiting Scholar
                                        Research Fellowship at the Study Centre of the Canadian Centre for Architecture;
                                        the Cullinan Chair at Rice University; and the Sanders Fellowship at the
                                        University of Michigan.
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column white">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="white">Mason White</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image waldheim" src={White}
                                         alt="White"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Associate Professor, University of Toronto <br/>Partner,
                                        Lateral Office</p>
                                    <p>
                                        Mason White is Associate Professor at University of Toronto, and a founding
                                        partner of the internationally recognized design practice Lateral Office. His
                                        design work and research consider architecture in relationship to environment
                                        and infrastructure. He is the recipient of the 2012-13 Howard Friedman Visiting
                                        Professorship in the Practice of Architecture at UC Berkeley College of
                                        Environmental Design and the 2008&#8211;09 Arthur Wheelwright Fellowship from Harvard
                                        Graduate School of Design. White is author of <i>Many Norths: Spatial Practice
                                        in a
                                        Polar Territory</i> and a co-editor of <i>Third Coast Atlas: Prelude to a
                                        Plan.</i>
                                    </p>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 col12"></div>
                        </div>
                    </div>
                    <div className="individual-speaker name-column yu">
                        <div className="w3-row">
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-name-col">
                                <div className="sp-name">
                                    <h3 className="speakerName"><a name="yu">Kongjian Yu, FASLA</a>
                                    </h3>
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
                                <div className="speaker-img-region">
                                    <img className="speaker-image yu" src={Yu}
                                         alt="Yu"/>
                                </div>
                            </div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1"></div>
                            <div className="w3-col l1 speaker-desc-col">
                                <div className="speaker-desc">
                                    <p className="speakerTitle">Changjiang Chair Professor of Design, Peking University
                                        College of Architecture and Landscape <br/>President and Principal Designer,
                                        Turenscape<br/>Fellow of the American Academy of Arts and Sciences</p>
                                    <p>
                                        A Recipient of a Doctor of Design degree from Harvard’s Graduate School of
                                        Design, Kongjian Yu is founder of the College of Architecture and Landscape at
                                        Peking University. In addition, he is the founder and president of Turenscape,
                                        one of the first and largest private urbanism and landscape architecture firms
                                        in China. His pioneering research on “ecological security patterns” and
                                        “sponge cities” have been adopted by the Chinese government as the guiding
                                        theory for national land use planning, eco-city campaign, and urban ecological
                                        restoration. His practice includes landscape and urbanism in major cities around
                                        the world. His guiding design principles are the appreciation of the ordinary
                                        and a deep embracing of nature, even in its potentially destructive aspects,
                                        such as urban flooding. His numerous awards include 13 ASLA Excellence and Honor Awards and a 2009 Urban Land Institute Global Award, and five World's Best Landscape of the Year Awards
                                        from the World Architecture Festival. 
                                    </p>
                                </div>
                            </div>
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
        )
    }
}
export default Speaker;