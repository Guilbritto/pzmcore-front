import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';
import Template from './Template';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => { 
  const { user } = useAuth();
  
  return (
    <ReactDOMRoute
      {...rest} 
      render={({ location }) => {
       
        return isPrivate === !!user ? isPrivate ? (
          <Template> <Component /></Template>
        ) : (<Component />) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
