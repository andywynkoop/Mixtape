require 'open-uri'

class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.new(artist_params)
    if (params[:is_upload] == "false") 
      @artist.img.attach(io: open(params[:img_url]), filename: "#{params[:artist][:name]}_upload")
    end
    if @artist.save
      render :show
    else
      render @artist.errors.full_messages
    end
  end

  def index 
    @artists = Artist.all
  end

  def show 
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:img, :name)
  end
end