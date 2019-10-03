class Playlist < ApplicationRecord
  validates :name, presence: true

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  has_many :playlist_songs, dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song
  
  has_many :albums,
    through: :songs,
    source: :album
  
  has_many :artists,
    through: :albums,
    source: :artist
  
  has_one_attached :img
end