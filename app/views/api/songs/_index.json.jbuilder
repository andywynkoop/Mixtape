songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id
    json.artist_id song.artist.id
    json.audio url_for(song.audio) if song.audio.attached?
  end
end