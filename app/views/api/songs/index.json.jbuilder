artists = Artist.all.with_img
albums = Album.all.with_img

json.partial! '/api/music/index.json.jbuilder', albums: albums, songs: @songs, artists: artists