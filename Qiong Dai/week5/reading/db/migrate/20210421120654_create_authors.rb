class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :title
      t.text :year
      t.text :medium
      t.text :style
      t.text :image
    end
  end
end
