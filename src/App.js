import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home';

const App=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;
