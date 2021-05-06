River.destroy_all

River.create :name => 'Murray River', :length => 2508, :country => 'Australia'
River.create :name => 'Yangtze', :length => 6300, :country => 'China'
River.create :name => "Nile River", :length => 6650, :country => 'Egypt'
River.create :name => 'Mississippi River', :length => 3730, :country => "America"


puts "#{ River.count } rivers created."
