import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Scrawl from './containers/Scrawl';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/scrawl/:slug" exact component={Scrawl}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;