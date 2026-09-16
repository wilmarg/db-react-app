import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';


const LoginRouter = () => {

  return (
    
    <Router>
        <Switch>
            <Route exact path = "/login" component={LoginScreen}/>
        </Switch>

        <AppRouter/>
    </Router>
    
  );
};

export default LoginRouter;