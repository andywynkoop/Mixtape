class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist = current_user.playlists.find(params[:playlist_id])
    unless @playlist
      render json: ["This isn't yours"], status: 401
    else
      @playlist_song = @playlist.playlist_songs.new(playlist_song_params)
      last_ord = @playlist_song.ord = @playlist.playlist_songs.order(:ord).last.ord
      @playlist_song.ord = last_ord + 1
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
      @playlist = @playlist_song.playlist
      later_playlist_songs = @playlist.playlist_songs.where('ord > ?', @playlist_song.ord)
      @playlist_song.destroy
      later_playlist_songs.each { |pls| pls.update(ord: pls.ord - 1) }
      render '/api/playlists/show'
    else
      render json: ["This isn't yours"], status: 401
    end
  end

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id)
  end
end