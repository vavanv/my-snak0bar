import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import routes from './routes';
import Home from 'Views/Home';

const Router: FC = () => (
    <Switch>
        <Route path={routes.rootPath} component={Home}/>
        <Route component={Home}/>
    </Switch>
);

export default Router;