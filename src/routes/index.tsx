import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';
import Register from '../pages/Register';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Services from '../pages/Services';
import ProvidersList from '../pages/ProvidersList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/services" component={Services} isPrivate />
    <Route path="/providers" component={ProvidersList} isPrivate />
  </Switch>
);

export default Routes;
