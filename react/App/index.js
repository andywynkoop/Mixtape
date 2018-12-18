import React from 'react-lite';
import { Login, SignUp } from './Session';
import Splash from './Splash';
import Browse from './Browse';
import { HashRouter, Route } from 'react-router-lite';

export default () => 
  <HashRouter>
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/browse" component={Browse} />
      <Route path="/browse/albums/:albumId" component={Browse} />
      <Route exact path="/" component={Splash} />
    </div>
  </HashRouter>;