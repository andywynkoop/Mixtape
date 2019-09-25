artists = Artist.all
albums = Album.all

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: @songs, artists: artists