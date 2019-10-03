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
    @playlists = current_user.playlists.includes(:artists)
    @artists, @albums, @songs = [], [], []
    @playlists.each do |playlist|
      @artists.concat(playlist.artists)
      @albums.concat(playlist.albums)
      @songs.concat(playlist.songs)
    end
    render :index
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  def playlist_params
    params.require(:playlist).permit(:name, :img)
  end
end