class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all.limit(30)
    render :index
  end

  def show
    @songs = Album.find(params[:id]).songs
    render '/api/songs/index'
  end
end