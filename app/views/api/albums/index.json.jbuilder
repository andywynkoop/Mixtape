artists = @albums.map(&:artist)
songs = []
@albums.each do |album|
  songs.concat(album.songs)
end

json.partial! '/api/music/index.json.jbuilder', albums: @albums, songs: songs, artists: artists