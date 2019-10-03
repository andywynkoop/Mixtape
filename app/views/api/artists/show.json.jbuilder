artists = [@artist]
albums = @artist.albums.with_img
songs = @artist.songs.includes(:artist).with_audio

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: songs, artists: artists