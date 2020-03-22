import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './pages/login';
import Recipes from './pages/recipes/index';
import MyRecipes from './pages/myrecipes';
import { ToastContainer} from 'react-toastify';
import EditRecipe from './pages/editrecipes';
import Routes from './routes';

const App=()=>{
    return(
        <>
            <Routes/>
            <ToastContainer autoClose={2000}/>
        </>
    )
}

export default App;
