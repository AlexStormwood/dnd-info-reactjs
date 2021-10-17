import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute({component: Component, ...rest}){
    

    return (
        <Route {...rest} render={props => requestProtectedContent(Component, props)} />
    )

}

function requestProtectedContent(Component, props){
    
    // Replace this chunk of code with whatever auth solution you use:
    let isUserAllowedHere = false;
    if (window.confirm("Press OK if you are the Dungeon Master.")){
        isUserAllowedHere = true;
    }
    // As long as you end up with a true/false value to use in the upcoming return statement, 
    // all is good!

    return (
        isUserAllowedHere 
            ?
            <Component {...props} /> 
            :
            <Redirect to="/" />
    );
}

export default ProtectedRoute;