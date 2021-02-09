import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginScreen from '../components/loginScreen'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={LoginScreen} path="/" exact/>
        </Switch>
    </BrowserRouter>
)

export default Routes