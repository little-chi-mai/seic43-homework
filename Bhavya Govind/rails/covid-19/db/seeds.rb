Patient.destroy_all

Patient.create :name => 'Trump', :date_of_joining => "2019-02-19", :city_name => 'Florida'
Patient.create :name => 'Rajani', :date_of_joining => "2019-02-19", :city_name => 'Hyderabad'

puts "#{Patient.count} are infected"
