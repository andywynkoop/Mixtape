json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id
      json.artist_id = song.artist.id
      json.audio url_for(song.audio)
    end
  end
end

json.albums do
  @songs.each do |song|
    json.set! song.album.id do
      json.extract! song.album, :id, :title, :year, :artist_id
    end
  end
end

json.artists do
  @songs.each do |song|
    json.set! song.artist.id do
      json.extract! song.artist, :id, :name
    end
  end
end