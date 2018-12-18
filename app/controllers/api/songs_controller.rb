require 'open-uri'

class Api::SongsController < ApplicationController
  def index
    query = params[:query]
    @songs = Song.all.limit(60).includes(:artist, :album)
    render :index
  end
end