import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginScreen from '../components/loginScreen'
import RegisterScreen from '../components/registerScreen'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={LoginScreen} path="/" exact/>
            <Route component={RegisterScreen} path="/register"/>
        </Switch>
    </BrowserRouter>
)

export default Routes