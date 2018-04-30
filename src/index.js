import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/Components/Pages/Home/Home';
import Register from '../src/Components/Pages/Register/Register';
import Schedule from '../src/Components/Pages/Schedule/Schedule';
import Venue from '../src/Components/Pages/Venue/Venue';
import Speaker from './Components/Pages/Speakers/Speaker';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/speakers" component={Speaker} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/register" component={Register} />
            <Route path='/dw-longwood' component={() => window.location = 'https://longwoodgardens.org/'}/> 
            <Route path='/longwood-main-site' component={() => window.location = 'https://longwoodgardens.org'}/>
            <Route path='/aar-main-site' component={() => window.location = 'http://www.aarome.org/'}/>
            <Route path='/longwood-site-hotels' component={() => window.location = 'https://longwoodgardens.org/visit/hotel-attractions-packages/hotels'}/>
            <Route path='/mariott' component={() => window.location = 'https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Designing%20Water%20Symposium%5Ephlks%60LSELSEA%7CLSELSEB%60159.00%60USD%60false%604%6010/16/18%6010/21/18%609/16/18&app=resvlink&stop_mobi=yes'}/>
            <Route path='/hilton' component={() => window.location = 'http://group.hiltongardeninn.com/LongwoodSymposium'}/>
            <Route path='/tickets' component={() => window.location = 'https://tickets.longwoodgardens.org/ItemShow.aspx?Dep=vNNi+kPNMCi01fArcJjQCQ==&Cat=qgt3hyWfggEiq3MHOZD8Jg==&It=OlqRNWkqB+BZ5354DrTfgQ=='}/>
        </div>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
