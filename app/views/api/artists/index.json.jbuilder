albums = []
songs = []
@artists.each do |artist|
  albums.concat(artist.albums)
  songs.concat(artist.songs)
end

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: @artists