class PlaylistSong < ApplicationRecord
  validates :ord, presence: true
  validates :song_id, uniqueness: { scope: :playlist_id }
  validates :ord, uniqueness: { scope: :playlist_id }
  
  belongs_to :song
  belongs_to :playlist
end