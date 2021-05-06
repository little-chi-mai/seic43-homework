class CreateHabitats < ActiveRecord::Migration[5.2]
  def change
    create_table :habitats do |t|
      t.text :name
      t.text :location
      t.text :characteristics
      t.text :image
      t.timestamps
    end
  end
end
