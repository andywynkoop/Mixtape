import React from 'react-lite';
import { Link } from 'react-router-lite';
import { login } from '../../actions';
import { connect } from 'react-redux-lite';

const Nav = ({ demo }) => 
  <nav className="nav">
    <Link to="/">
      <img className="logo" src="https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png" />
    </Link>
    <ul className="nav-links">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      <a onClick={demo}>Demo</a>
    </ul>
  </nav>;

const mdtp = dispatch => ({
  demo: () => dispatch(login({ email: "Andy5@email.com", password: "password" }))
});

export default connect(null, mdtp)(Nav);