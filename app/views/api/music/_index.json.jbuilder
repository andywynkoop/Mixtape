json.songs do
  json.partial! '/api/songs/index.json.jbuilder', songs: songs
end

json.albums do
  json.partial! '/api/albums/index.json.jbuilder', albums: albums
end

json.artists do
  json.partial! '/api/artists/index.json.jbuilder', artists: artists
end

playlists = playlists || current_user.playlists
json.partial! '/api/playlists/index.json.jbuilder', playlists: playlists