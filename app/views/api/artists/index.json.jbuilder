album_ids = []
song_ids = []
@artists.each do |artist|
  album_ids.concat(artist.albums.map(&:id))
  song_ids.concat(artist.songs.map(&:id))
end

albums = Album.where(id: album_ids).includes(:artist).with_img
songs = Song.where(id: song_ids).includes(:album, :artist).with_audio

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: @artists