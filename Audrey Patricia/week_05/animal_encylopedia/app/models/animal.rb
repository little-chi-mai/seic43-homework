class Animal < ActiveRecord::Base
  belongs_to :habitat, :optional => true

  # def habitat_name=(name)
  #   self.habitat = Habitat.find_or_create_by(name: name)
  # end
  #
  #  def habitat_name
  #     self.habitat ? self.habitat.name : nil
  #  end
end
