import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/Components/Pages/Home/Home';
import Register from '../src/Components/Pages/Register/Register';
import Schedule from '../src/Components/Pages/Schedule/Schedule';
import Venue from '../src/Components/Pages/Venue/Venue';
import Speaker from './Components/Pages/Speakers/Speaker'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/speakers" component={Speaker} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/register" component={Register} />
        </div>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
