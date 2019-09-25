artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name
    json.img url_for(artist.img) if artist.img.attached?
  end
end