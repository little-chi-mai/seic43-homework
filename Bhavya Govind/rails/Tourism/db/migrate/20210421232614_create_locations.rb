class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.text :name
      t.text :time_to_visit
      t.text :image
      t.text :info
      t.integer :city_id
    end
  end
end
