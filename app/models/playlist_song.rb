class PlaylistSong < ApplicationRecord
  validates :song, uniqueness: { scope: [:playlist] }
  
  belongs_to :song
  belongs_to :playlist
end