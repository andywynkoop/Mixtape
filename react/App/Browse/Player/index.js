import React, { Component } from 'react-lite';
import { connect } from 'react-redux-lite';
import { play, pause, seekLeft, seekRight, playFirst } from '../../../actions';

class Player extends Component {
  componentDidUpdate(oldProps) {
    const { song } = this.props;
    if (!song) return;
    if (!oldProps.song || oldProps.song.id !== this.props.song.id) {
      if (!this.audio) this.audio = new Audio(song.audio);
      else this.audio.setAttribute('src', song.audio);
      this.audio.play();
    }

    if (!oldProps.playing && this.props.playing) {
      this.audio.play();
    } else if (oldProps.playing && !this.props.playing) {
      this.audio.pause();
    }
  }

  playPauseFn = () => {
    if (!this.audio) return this.props.playFirst();
    return this.props.playing
      ? this.props.pause()
      : this.props.play();
  }

  playPauseBtn = () => this.props.playing 
    ? <i className="fas fa-pause" />
    : <i className="fas fa-play" />

  render() {
    return (
      <div className="player">
        <div className="player-buttons">
          <button className="back" onClick={this.props.seekLeft}>
            <i className="fas fa-backward"/>
          </button>
          <button className="play" onClick={this.playPauseFn}>
            {this.playPauseBtn()}
          </button>
          <button className="forward" onClick={this.props.seekRight}>
            <i className="fas fa-forward" />
          </button>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  song: state.entities.songs[state.ui.song],
  playing: state.ui.playing
});

const mdtp = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  seekLeft: () => dispatch(seekLeft()),
  seekRight: () => dispatch(seekRight()),
  playFirst: () => dispatch(playFirst())
})

export default connect(mstp, mdtp)(Player);