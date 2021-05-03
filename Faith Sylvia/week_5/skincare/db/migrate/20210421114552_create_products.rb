class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :name
      t.text :image
      t.text :size
      t.decimal :price
      t.text :description
      t.text :ingredients
      t.decimal :rating
      t.timestamps
      t.integer :brand_id
    end
  end
end
