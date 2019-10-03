require 'open-uri'

class Api::AlbumsController < ApplicationController 
  def create
    @album = Album.new(album_params)
    if (params[:is_upload] == "false") 
      @album.img.attach(io: open(params[:img_url]), filename: "#{params[:album][:title]}_upload")
    end
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages
    end
  end
  
  def index
    @albums = Album.all.limit(50).includes(:songs, :artist).with_img
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