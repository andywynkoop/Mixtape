artists = [@album.artist]
albums = [@album]
songs = @album.songs

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: artists