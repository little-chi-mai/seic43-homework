class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.text :genre
      t.integer :publish_year
      t.text :cover
      t.timestamps # created_at, updated_at
    end
  end
end
