import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './pages/login';
import Recipes from './pages/recipes/index';
import MyRecipes from './pages/myrecipes';
import { ToastContainer} from 'react-toastify';
import EditRecipe from './pages/editrecipes';

const App=()=>{
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/recipes" component={Recipes}/>
                    <Route path="/recipes/:id" component={EditRecipe}/>
                    <Route path="/myrecipes" component={MyRecipes}/>
                </Switch>
            </Router>
    )
}

export default App;
