import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import Login from '../pages/login';
import Recipes from '../pages/recipes';
import EditRecipe from '../pages/editrecipes';
import MyRecipes from '../pages/myrecipes';
import DetailsRecipe from '../pages/details';
import Menu from '../components/NavBar';
import NotFound from '../pages/404/404';

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if(!location) return false;
  const {pathname} = location;
  console.log(pathname);
  return pathname === "/";
}

const Routes=()=> {
    return (
      <BrowserRouter>
          <Menu/>
          <Switch>
            
            <PublicRoute restricted={true} exact path="/" component={Login}/>
            <PrivateRoute   exact path="/recipes" component={Recipes} isActive={checkActive}/>
            <PrivateRoute   path="/recipes/detail/:id" component={DetailsRecipe} isActive={checkActive}/>
            <PrivateRoute   path="/myrecipes/create" component={EditRecipe} isActive={checkActive}/>
            <PrivateRoute   path="/myrecipes/update/:id" component={EditRecipe} isActive={checkActive}/>
            <PrivateRoute   path="/myrecipes" component={MyRecipes} isActive={checkActive}/>
            <PublicRoute  component={NotFound}/>       
          </Switch>
      </BrowserRouter>
    );
}

export default Routes;