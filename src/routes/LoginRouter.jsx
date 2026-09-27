import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';


const LoginRouter = () => {

  return (
    //en el codigo original el <AppRouter/> lo tengo justo debajo del <Router> 
    <Router>
        
        <Switch>
            <Route exact path = "/login" component={LoginScreen}/>
            <Route path = "/" component={AppRouter}/>
        </Switch>
    </Router>
    
  );
};

export default LoginRouter;