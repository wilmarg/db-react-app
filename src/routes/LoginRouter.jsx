import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppRouter from './AppRouter';
import LoginScreen from '../pages/LoginScreen';
import { AuthContext } from '../context/AuthContext';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';


const LoginRouter = () => {

  const {log} = useContext(AuthContext);

  return (
    //en el codigo original el <AppRouter/> lo tengo justo debajo del <Router> 
    <Router>
        
        <Switch>
            {/*   <Route exact path = "/login" component={LoginScreen}/>  */}
            {/*    <Route path = "/" component={AppRouter}/>  */}
          <PublicRouter path="/login" auth={log} component={LoginScreen}/>
          <PrivateRouter path="/" auth={log} component={AppRouter}/>
            
        </Switch>
    </Router>
    
  );
};

export default LoginRouter;