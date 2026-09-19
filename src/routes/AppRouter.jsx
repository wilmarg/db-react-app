import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import MenScreen from '../pages/MenScreen';
import WomenScreen from '../pages/womenScreen';
import SearchScreen from '../pages/SearchScreen';
import Navbar from '../components/Navbar';
import CharacterScreen from '../pages/CharacterScreen';



const AppRouter = () => {

  return (
    
    <>
        <Navbar/>
        <Switch>
            <Route exact path = "/men" component={MenScreen}/>
            <Route exact path = "/women" component={WomenScreen}/>
            <Route exact path = "/search" component={SearchScreen}/>

            <Route exact path = "/character/:id" component={CharacterScreen}/>

            <Redirect to="/login"/>
        </Switch>
    </>
    
  );
};

export default AppRouter;