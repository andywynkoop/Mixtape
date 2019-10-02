json.partial! '/api/music/index.json.jbuilder', artists: @playlist.artists, albums: @playlist.albums, songs: @playlist.songs

json.playlists do
  json.set! @playlist.id do
    json.extract! @playlist, :id, :name, :creator_id
    json.playlist_song_ids @playlist.playlist_songs.map(&:id)
  end
end

json.playlist_songs do
  @playlist.playlist_songs.each do |ps|
    json.set! ps.id do
      json.extract! ps, :id, :ord, :playlist_id, :song_id
    end
  end
end