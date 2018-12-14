import React, { Component } from 'react-lite';
import Nav from './Nav';
import { Link } from 'react-router-lite';
import { connect } from 'react-redux-lite';

class Splash extends Component {
  componentDidUpdate() {
    if (this.props.loggedIn) {
      window.location.replace('/#/browse');
    }
  }

  render = () => 
    <div className="splash-main">
      <Nav />
      <div className="splash">
        <h1>Music for Everyone.</h1>
        <Link to="/login">
          <button className="login">Log In</button>
        </Link>
        <h2>Get a taste of what you're missing.</h2>
      </div>
    </div>;
} 

const mstp = state => ({
  loggedIn: state.session
});

export default connect(mstp)(Splash);