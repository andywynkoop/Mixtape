class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :title, uniqueness: { scope: [:artist] }

  belongs_to :artist
  has_many :songs, dependent: :destroy

  has_one_attached :img
end