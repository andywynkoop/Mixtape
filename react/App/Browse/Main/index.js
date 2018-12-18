import React from 'react-lite';
import Nav from './Nav';
import { Route } from 'react-router-lite';
import View from './View';
import Album from './View/Albums/Album';

const Browse = () => 
  <div>
    <Nav />
    <View />
  </div>

export default () => 
  <div className="main">
    <Route path="/browse/albums/:albumId" component={Album} />
    <Route path="/browse" component={Browse} />
  </div>;