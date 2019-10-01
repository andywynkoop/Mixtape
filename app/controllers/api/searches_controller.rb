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

      @songs = Song.where(<<-SQL)
        LOWER(title) LIKE '%#{query}%'
      SQL
    end
  end
end