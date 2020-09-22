import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Join from '../components/Join/join';
import Chat from '../components/Chat/index';

import './app.css';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Join} />
                <Route exact path="/chat" component={Chat} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;