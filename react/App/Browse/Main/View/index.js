import React, { Component } from 'react-lite';
import { connect } from 'react-redux-lite';
import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';
import PlayLists from './PlayLists';

class View extends Component {
  render() {
    switch(this.props.menu) {
      case "playlists":
        return <PlayLists />;
      case "songs":
        return <Songs />;
      case "albums":
        return <Albums />;
      case "artists":
        return <Artists />;
      default:
        return <Songs />
    }
  }
}

const mstp = state => ({
  menu: state.ui.menu
});

export default connect(mstp)(View);