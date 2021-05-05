class AddHabitatIdToAnimals < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :habitat_id, :integer
  end
end
