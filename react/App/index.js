import React from 'react-lite';
import { Login, SignUp } from './Session';
import Splash from './Splash';
import Browse from './Browse';
import { HashRouter, Route } from 'react-router-lite';

export default () => 
  <HashRouter>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/browse" component={Browse} />
      <Route exact path="/" component={Splash} />
    </div>
  </HashRouter>;