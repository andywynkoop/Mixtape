import React, { Component } from 'react-lite';
import { fetchSongs, selectSong } from '../../../../actions';
import { connect } from 'react-redux-lite';

class Songs extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  selectSong = id => () => {
    let queue = [...this.props.queue];
    let startIdx = queue.findIndex(el => el === id.toString());
    let startSlice = queue.slice(startIdx, queue.length);
    let endSlice = queue.slice(0, startIdx);
    queue = startSlice.concat(endSlice);
    this.props.selectSong(id, queue);
  }

  render() {
    return(
      <ul>
        {this.props.songs.map((song, i) => 
          <li className="song" onClick={this.selectSong(song.id)}>
            <div>
              <div className="song-icon-container">
                <i className="fas fa-play" />
                <span>{`${i + 1}. `}</span>
              </div>
              {song.title}
            </div>
            <i className="fas fa-ellipsis-h" />
          </li>
        )}
      </ul>
    )
  }
}

const mstp = state => ({
  songs: Object.values(state.entities.songs),
  queue: Object.keys(state.entities.songs)
});

const mdtp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  selectSong: (id, queue) => dispatch(selectSong(id, queue))
});

export default connect(mstp, mdtp)(Songs);