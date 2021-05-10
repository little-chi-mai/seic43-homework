class Movie < ActiveRecord::Base
  belongs_to :director, :optional => true
end
