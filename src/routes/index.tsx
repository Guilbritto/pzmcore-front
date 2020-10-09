import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Forgot from '../pages/Forgot';
import VerificationCode from '../pages/Forgot/VerificationCode';

import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Route from './route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} isPrivate />

      
      <Route path="/signIn"  component={SignIn} />
      <Route path="/forgot/verification"  component={VerificationCode} />
      <Route path="/forgot"  component={Forgot} />
      <Route path="/" exact component={Login} />

    </Switch>
  );
};

export default Routes;
