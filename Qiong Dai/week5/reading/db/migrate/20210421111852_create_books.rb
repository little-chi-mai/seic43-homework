class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image
    end
  end
end
