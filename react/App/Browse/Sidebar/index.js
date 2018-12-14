import React from 'react-lite';
import { connect } from 'react-redux-lite';
import { Link } from 'react-router-lite';
import { logout } from '../../../actions';

const Sidebar = ({ logout }) => 
  <div className="sidebar">
    <Link to="/browse">
      <img className="logoB" src="https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png" />
    </Link>
    <button 
      onClick={logout}
      className="logout"
    >Log Out</button>
  </div>;

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdtp)(Sidebar);