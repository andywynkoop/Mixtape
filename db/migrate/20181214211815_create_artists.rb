class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :artists, :name, unique: true

    create_table :albums do |t|
      t.string :title, null: false, index: true
      t.integer :year, null: false
      t.integer :artist_id, null: false
      
      t.timestamps
    end

    add_index :albums, [:artist_id, :title], unique: true

    create_table :songs do |t|
      t.string :title, null: false, index: true
      t.integer :album_id, null: false

      t.timestamps
    end

    add_index :songs, [:album_id, :title], unique: true

    create_table :playlists do |t|
      t.string :name, null: false, index: true
      t.integer :creator_id, null: false, index: true
      
      t.timestamps
    end
  end
end
