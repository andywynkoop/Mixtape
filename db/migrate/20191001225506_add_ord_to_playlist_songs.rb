class AddOrdToPlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :playlist_songs, :ord, :integer, null: false
    add_index :playlist_songs, [:playlist_id, :ord], unique: true
  end
end
