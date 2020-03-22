import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import Login from '../pages/login';
import Recipes from '../pages/recipes';
import EditRecipe from '../pages/editrecipes';
import MyRecipes from '../pages/myrecipes';
import DetailsRecipe from '../pages/details';

const Routes=()=> {
    return (
      <BrowserRouter>
        <Switch>
            <PublicRoute restricted={true} exact path="/" component={Login}/>
            <PrivateRoute  exact path="/recipes" component={Recipes}/>
            <PrivateRoute exact path="/recipes/:id" component={EditRecipe}/>
            <PrivateRoute path="/myrecipes" component={MyRecipes}/>
            <PrivateRoute path="/recipes/detail/:id" component={DetailsRecipe} exact/>
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;