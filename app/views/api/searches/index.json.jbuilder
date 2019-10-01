json.partial! '/api/music/index.json.jbuilder', artists: @artists, albums: @albums, songs: @songs
json.results do
  json.artists @artists.map(&:id)
  json.albums @albums.map(&:id)
  json.songs @songs.map(&:id)
end