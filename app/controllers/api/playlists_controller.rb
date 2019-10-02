class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user
    if @playlist.save
      playlist_songs = params[:playlist_songs]
      playlist_songs.each do |song_id, ord|
        debugger
        @playlist.playlist_songs.create(ord: ord, song_id: song_id)
        debugger
      end
      debugger
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def playlist_params
    params.require(:playlist).permit(:name, :creator_id)
  end
end