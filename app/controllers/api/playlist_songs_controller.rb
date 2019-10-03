class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist = current_user.playlists.find(playlist_song_params[:playlist_id])
    unless @playlist
      render json: ["This isn't yours"], status: 401
    else
      @playlist_song = PlaylistSong.new(playlist_song_params)
      if @playlist_song.save
        render '/api/playlists/show'
      else
        render json: @playlist_song.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @playlist_song = current_user.playlist_songs.find(params[:id])
    if @playlist_song
      @playlist_song.destroy
      @playlist = @playlist_song.playlist
      render '/api/playlists/show'
    else
      render json: ["This isn't yours"], status: 401
    end
  end

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end