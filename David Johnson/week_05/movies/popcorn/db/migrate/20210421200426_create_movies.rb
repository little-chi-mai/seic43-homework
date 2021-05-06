class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :released
      t.text :genre
      t.text :cast
      t.text :image
      t.integer :director_id
      t.timestamps
    end
  end
end
