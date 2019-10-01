class Api::SearchesController < ApplicationController
  def index
    query = params[:query]
    if query == ""
      @artists, @albums, @songs = [], [], []
    else
      query = query.downcase
      @artists = Artist.where(<<-SQL)
        LOWER(name) LIKE '%#{query}%'
      SQL
      
      @albums = Album.where(<<-SQL)
        LOWER(title) LIKE '%#{query}%'
      SQL

      @songs = Song.find_by_sql(<<-SQL)
        SELECT
          songs.*
        FROM
          songs
        JOIN
          albums ON songs.album_id = albums.id
        JOIN
          artists ON albums.artist_id = artists.id
        WHERE
          LOWER(songs.title) LIKE '%#{query}%'
        OR
          LOWER(artists.name) LIKE '%#{query}%'
      SQL
    end
  end
end