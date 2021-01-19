import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MainPage from '../pages/Main/MainPage';
import AddMarket from '../pages/NewMarket/NewMarket';
import Contributions from '../pages/Contributions/Contributions';

import PrivateRouter from './PrivateRouter';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/new-account" component={RegisterPage}/>
            <PrivateRouter exact path="/add-market" component={AddMarket}/>
            <PrivateRouter exact path="/contributions" component={Contributions}/>
            <Route exact path="/" component={MainPage}/>
        </Switch>
    )
}

export default Router;
