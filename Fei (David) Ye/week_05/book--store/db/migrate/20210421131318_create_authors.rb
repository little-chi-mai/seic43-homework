class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :image
      t.timestamps
    end
  end
end
