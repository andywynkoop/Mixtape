class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :albums, dependent: :destroy

  has_many :songs,
    through: :albums,
    source: :songs
end