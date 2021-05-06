Ocean.destroy_all

Ocean.create :name => 'Pacific', :area=> 365.25, :depth => 3000
Ocean.create :name => 'Atlantic', :area => 283, :depth => 4000
Ocean.create :name => 'Indian', :area => 511, :depth => 6000

puts "#{ Ocean.count } oceans created."
