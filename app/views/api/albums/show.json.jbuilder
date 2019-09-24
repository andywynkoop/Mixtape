json.set! @album.id do
    json.extract! @album, :id, :title, :year, :artist_id
    json.img url_for(@album.img) if @album.img.attached?
end