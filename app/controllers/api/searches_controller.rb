class SearchesController < ApplicationController
  def index
    query = params[:query]

    @artists = Artist.where(<<-SQL)
      name LIKE '%#{query}%'
    SQL
    
    @albums = Album.where(<<-SQL)
      title LIKE '%#{query}%'
    SQL

    @songs = Song.where(<<-SQL)
      title LIKE '%#{query}%'
    SQL
  end
end