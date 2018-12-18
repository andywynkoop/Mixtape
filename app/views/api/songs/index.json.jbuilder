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
      json.img url_for(song.album.img)
    end
  end
end

json.artists do
  @songs.each do |song|
    json.set! song.artist.id do
      json.extract! song.artist, :id, :name
      json.img url_for(song.artist.img)
    end
  end
end