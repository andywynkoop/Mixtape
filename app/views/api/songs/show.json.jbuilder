artists = [@song.artist]
albums = [@song.album]
songs = [@song]

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: artists