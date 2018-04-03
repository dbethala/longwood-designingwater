import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/Components/Pages/Home/Home';
import Register from '../src/Components/Pages/Register/Register';
import Schedule from '../src/Components/Pages/Schedule/Schedule';
import Venue from '../src/Components/Pages/Venue/Venue';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/venue" component={Venue} />
        </div>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
