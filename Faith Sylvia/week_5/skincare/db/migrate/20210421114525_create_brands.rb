class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.text :motto
      t.text :logo
      t.text :description
      t.integer :established
    end
  end
end
