import React from 'react';
import { Switch } from 'react-router-dom';
import Forgot from '../pages/Forgot';
import PasswordRedefine from '../pages/Forgot/PasswordRedefine';
import VerificationCode from '../pages/Forgot/VerificationCode';
import HomePage from '../pages/HomePage';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Route from './route';

const Routes: React.FC = () => {
  return (
    <Switch>

      <Route path="/home" component={HomePage} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      
      <Route path="/signIn"  component={SignIn} />
      <Route path="/forgot/verification" exact  component={VerificationCode} />
      <Route path="/forgot/redefine" exact component={PasswordRedefine} />
      <Route path="/forgot" exact component={Forgot} />
      <Route path="/" exact component={Login} />

    </Switch>
  );
};

export default Routes;
