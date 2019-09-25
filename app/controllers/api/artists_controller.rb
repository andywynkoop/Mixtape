class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.create(artist_params)
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