import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/LoginPage';

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/new-account">
                Nueva cuenta - Protected
            </Route>
            <Route path="/contributions">
                Mis aportes - Protected
            </Route>
            <Route path="/">
                Principal
            </Route>
        </Switch>
    )
}

export default Router
