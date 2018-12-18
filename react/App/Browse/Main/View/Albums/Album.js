import React, { Component } from 'react-lite';
import { selectSong, pause, playAlbum } from '../../../../../actions';
import { connect } from 'react-redux-lite';
import Song from '../Songs/Song';

class Album extends Component {
  componentDidMount() {
    this.props.playAlbum(this.props.match.params.albumId, () => {
      console.log("done")
    });
  }
  selectSong = id => () => {
    let queue = [...this.props.queue];
    let startIdx = queue.findIndex(el => el === id.toString());
    let startSlice = queue.slice(startIdx, queue.length);
    let endSlice = queue.slice(0, startIdx);
    queue = startSlice.concat(endSlice);
    this.props.selectSong(id, queue);
  }

  back = () => this.props.history.push('/browse');
  
  render() {
    const { album, artist, selected, pause, playing, songs } = this.props;
    if (!album) return <div />;
    const { img, title } = album;
    return(
      <div className="album-show">
        <div className="album-show-artist">
          <img src={img} />
          <h4>{title}</h4>
          <h5>{artist.name}</h5>
        </div>
        <ul>
          {songs.map((song, i) => 
            <Song
              song={song}
              i={i}
              select={this.selectSong}
              selected={song.id === parseInt(selected)}
              pause={pause}
              playing={playing}
            />
          )}
        </ul>
        <button className="album-back" onClick={this.back}>
          <i className="fas fa-chevron-left" />
        </button>
      </div>
    )
  }
}

const mstp = (state, props) => {
  const album = state.entities.albums[props.match.params.albumId];
  let artist;
  let songs;
  if (album) {
    artist = state.entities.artists[album.artist_id];
    songs = [...state.ui.queue].sort().map(id => state.entities.songs[id]);
  }
  return ({
    queue: state.ui.queue,
    selected: state.ui.song,
    playing: state.ui.playing,
    album,
    artist,
    songs
  });
};

const mdtp = dispatch => ({
  selectSong: (id, queue) => dispatch(selectSong(id, queue)),
  pause: () => dispatch(pause()),
  playAlbum: (id, cb) => dispatch(playAlbum(id, cb))
});

export default connect(mstp, mdtp)(Album);