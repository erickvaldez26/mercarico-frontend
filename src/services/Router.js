import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MainPage from '../pages/Main/MainPage';

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/new-account" component={RegisterPage}/>
            <Route path="/add-market">
                Agregar mercado
            </Route>
            <Route path="/contributions">
                Mis aportes - Protected
            </Route>
            <Route path="/" component={MainPage}/>
        </Switch>
    )
}

export default Router;
