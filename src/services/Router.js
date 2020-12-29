import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MainPage from '../pages/Main/MainPage';
import AddMarket from '../pages/NewMarket/NewMarket';
import Contributions from '../pages/Contributions/Contributions';

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/new-account" component={RegisterPage}/>
            <Route path="/add-market" component={AddMarket}/>
            <Route path="/contributions" component={Contributions}/>
            <Route path="/" component={MainPage}/>
        </Switch>
    )
}

export default Router;
