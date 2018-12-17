import React from 'react-lite';
import { connect } from 'react-redux-lite';
import { CHANGE_MENU } from '../../../actions';

const Nav = ({ select }) => 
  <nav className="main-nav">
    <ul>
      <li onClick={() => select('playlists')}>Playlists</li>
      <li onClick={() => select('songs')}>Songs</li>
      <li onClick={() => select('albums')}>Albums</li>
      <li onClick={() => select('artists')}>Artists</li>
    </ul>
    <button className="new-playlist">New Playlist</button>
  </nav>;

const mstp = state => ({
  menu: state.ui.menu
});

const mdtp = dispatch => ({
  select: menu => dispatch({ type: CHANGE_MENU, menu})
});

export default connect(mstp, mdtp)(Nav);