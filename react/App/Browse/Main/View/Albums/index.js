import React, { Component } from 'react-lite';
import { connect } from 'react-redux-lite';
import { fetchAlbums, playAlbum, playFirst, pause } from '../../../../../actions';
import MediaCard from '../shared/MediaCard';

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  select = albumId => () => 
    this.props.playAlbum(albumId, () => this.props.playFirst());

  isPlaying = id => {
    if (this.props.selected && this.props.playing) { 
      return this.props.selected.album_id === id;
    } else {
      return false;
    }
  };

  render() {
    return(
      <div>
        <ul className="albums">
          {this.props.albums.map(
            ({ id, img, title, artist_id }) => 
              <MediaCard 
                img={img} 
                title={title} 
                creator={this.props.artists[artist_id].name} 
                select={this.select(id)} 
                redirect={`/browse/albums/${id}`}
                selected={this.isPlaying(id)}
                pause={this.props.pause}
              />
          )}
        </ul>
      </div>
    );
  }
}

const mstp = state => ({
  albums: Object.values(state.entities.albums),
  artists: state.entities.artists,
  selected: state.entities.songs[state.ui.song],
  playing: state.ui.playing
});

const mdtp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  playAlbum: (albumId, cb) => dispatch(playAlbum(albumId, cb)),
  playFirst: () => dispatch(playFirst()),
  pause: () => dispatch(pause())
});

export default connect(mstp, mdtp)(Albums);