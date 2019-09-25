class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :albums, dependent: :destroy

  has_many :songs,
    through: :albums,
    source: :songs

  has_one_attached :img

  scope :with_albums, -> { 
    eager_load(:albums) 
  }

  scope :with_songs, -> { 
    eager_load(:songs) 
  }

  scope :with_img, -> {
    eager_load(img_attachment: :blob)
  }
end