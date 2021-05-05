class Location < ActiveRecord::Base
  belongs_to :city, :optional => 'true'
end
