class Song < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: [:album] }

  belongs_to :album

  has_one :artist,
    through: :album,
    source: :artist
  
  has_many :playlist_songs, dependent: :destroy
  has_many :playlists,
    through: :playlist_songs,
    source: :playlist

  has_one_attached :audio

  scope :with_artist, -> {
    eager_load(:artist)
  }

  scope :with_album, -> {
    eager_load(:album)
  }

  scope :with_audio, -> {
    eager_load(audio_attachment: :blob)
  }
end