class Api::AlbumsController < ApplicationController 
  def create
    @album = Album.new(album_params)
    if @album.save
      render :show
    else
      render @album.errors.full_messages
    end
  end
  
  def index
    @albums = Album.all.limit(30).includes(:songs).with_img.with_artist
    render :index
  end
  
  def show
    @album = Album.find(params[:id])
    render :show
  end

  def album_params
    params.require(:album).permit(:img, :title, :year, :artist_id)
  end
end