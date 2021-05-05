class AddBackgroundImageToHabitats < ActiveRecord::Migration[5.2]
  def change
    add_column :habitats, :background_image, :text
  end
end
