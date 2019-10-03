artist_ids = @albums.map { |album| album.artist.id }
song_ids = []
@albums.each do |album|
  song_ids.concat(album.songs.map(&:id))
end
songs = Song.where(id: song_ids).includes(:artist, :album).with_audio
artists = Artist.where(id: artist_ids).with_img
json.partial! '/api/music/index.json.jbuilder', albums: @albums, songs: songs, artists: artists