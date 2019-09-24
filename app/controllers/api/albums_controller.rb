class Api::AlbumsController < ApplicationController 
  def create
    @album = Album.new(album_params)
    debugger
    if @album.save
      render :show
    else
      render @album.errors.full_messages
    end
  end
  
  def index
    @albums = Album.all.limit(30)
    render :index
  end
  
  def show
    @songs = Album.find(params[:id]).songs
    render '/api/songs/index'
  end

  def album_params
    params.require(:album).permit(:img, :title, :year, :artist_id)
  end
end