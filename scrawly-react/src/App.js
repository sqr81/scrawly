import React from 'react';
import './Skeleton.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Scrawl from './containers/Scrawl';
import ScrawlNew from './containers/ScrawlNew';
import ScrawlEdit from './containers/ScrawlEdit';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/scrawl/:slug" exact component={Scrawl}/>
                    <Route path="/scrawlnew" exact component={ScrawlNew}/>
                    <Route path="/scrawledit/:slug" exact component={ScrawlEdit}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;