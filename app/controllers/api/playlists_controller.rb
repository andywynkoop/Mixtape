class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user
    if @playlist.save
      playlist_songs = params[:playlist_songs]
      playlist_songs.each do |song_id, ord|
        @playlist.playlist_songs.create(ord: ord, song_id: song_id)
      end
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def index
    @playlists = current_user.playlists.with_img.includes(:artists)
    @artists, @albums, @songs = [], [], []
    @playlists.each do |playlist|
      @artists.concat(playlist.artists.with_img)
      @albums.concat(playlist.albums.with_img)
      @songs.concat(playlist.songs.with_audio)
    end
    render :index
  end

  def show
    @playlist = current_user.playlists.find(params[:id])
    if @playlist 
      render :show
    else
      render json: ["Unauthorized"], status: 401
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :destroy
  end

  def playlist_params
    params.require(:playlist).permit(:name, :img)
  end
end