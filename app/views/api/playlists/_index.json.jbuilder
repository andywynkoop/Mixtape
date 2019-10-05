json.playlists do
  playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :creator_id
      json.playlist_song_ids playlist.playlist_songs.map(&:id)
      json.song_count playlist.playlist_songs.count
      json.img url_for(playlist.img) if playlist.img.attached?
    end
  end
end

json.playlist_songs do
  playlists.each do |playlist|
    playlist.playlist_songs.each do |ps|
      json.set! ps.id do
        json.extract! ps, :id, :ord, :playlist_id, :song_id
      end
    end
  end
end