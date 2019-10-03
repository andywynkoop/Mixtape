artists = [@album.artist]
albums = [@album]
songs = @album.songs.includes(:artist).with_audio

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: artists