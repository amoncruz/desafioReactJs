import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './pages/login';
import Recipes from './pages/recipes/index';
import MyRecipes from './pages/myrecipes';

const App=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/recipes" component={Recipes}/>
                <Route path="/myrecipes" component={MyRecipes}/>
            </Switch>
        </Router>
    )
}

export default App;
