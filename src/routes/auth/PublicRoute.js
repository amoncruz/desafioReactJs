import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const user = useSelector(state=>state.user.user);
    
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            user.token!==undefined && restricted ?
                <Redirect to="/recipes" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;