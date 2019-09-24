require 'open-uri'
require 'rest-client'

class Api::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    query = params[:query]
    @songs = Song.all.limit(60).includes(:artist, :album)
    render :index
  end

  def create
    node_endpoint = "http://localhost:3001"
    rails_endpoint = "http://localhost:3000/api/receive_song_file"
    test = RestClient.get("#{node_endpoint}?url=https://www.youtube.com/watch?v=#{song_params[:video_id]}&title=#{song_params[:title]}&album_id=#{song_params[:album_id]}&callback=#{rails_endpoint}")
    render json: { message: "Waiting" }
  end

  def receive_song_file
    filename = params[:filename]
    album_id = params[:album_id]
    title = params[:title]
    node_endpoint = "http://localhost:3001"
    file = open("#{node_endpoint}/songs/#{filename}")
    new_song = Song.create(
      title: title, 
      album_id: album_id, 
      audio: { io: file, filename: "#{filename}.webm"}
    )
    render json: url_for(new_song.audio)
  end

  def song_params
    params.require(:song).permit(:video_id, :title, :album_id)
  end
end