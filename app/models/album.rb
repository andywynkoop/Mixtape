class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :title, uniqueness: { scope: [:artist] }

  belongs_to :artist
  has_many :songs, dependent: :destroy

  has_one_attached :img

  scope :with_artist, -> { 
    eager_load(:artist) 
  }

  scope :with_songs, -> {
    eager_load(:songs)
  }

  scope :with_img, -> {
    eager_load(img_attachment: :blob)
  }
end