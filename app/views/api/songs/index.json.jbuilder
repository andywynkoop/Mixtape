json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id
      json.artist_id = song.artist.id
      json.audio url_for(song.audio) if song.audio.attached?
    end
  end
end

json.albums do
  Album.all.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :year, :artist_id
      json.img url_for(album.img) if album.img.attached?
    end
  end
end

json.artists do
  Artist.all.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
      json.img url_for(artist.img) if artist.img.attached?
    end
  end
end