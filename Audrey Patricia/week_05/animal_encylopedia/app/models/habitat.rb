class Habitat < ActiveRecord::Base
  has_many :animals

  # def habitat_name
  #   "#{name}"
  # end
end
