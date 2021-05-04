class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.text :name
      t.text :scientific_name
      t.text :weight
      t.text :diet
      t.text :funfact
      t.text :image
      t.timestamps
    end
  end
end
