import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MenScreen from '../pages/MenScreen';
import WomenScreen from '../pages/womenScreen';
import SearchScreen from '../pages/SearchScreen';



const AppRouter = () => {

  return (
    
    <>
        <Switch>
            <Route exact path = "/men" component={MenScreen}/>
            <Route exact path = "/women" component={WomenScreen}/>
            <Route exact path = "/search" component={SearchScreen}/>
        </Switch>
    </>
    
  );
};

export default AppRouter;