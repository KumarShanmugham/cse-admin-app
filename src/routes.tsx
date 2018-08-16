import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './common/components/Header';
import { AssociateContainer } from './containers/Associate/AssociateContainer';
import { HomeContainer } from './containers/Home/HomeContainer';
import { RoleContainer } from './containers/Role/RoleContainer';

export const Routes: React.StatelessComponent = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Header} />
                <Route excat={true} path="/home" component={HomeContainer} />
                <Route excat={true} path="/roles" component={RoleContainer} />
                <Route excat={true} path="/associates" component={AssociateContainer} />
            </div>
        </Router>
    );
};