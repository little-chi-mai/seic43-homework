Mountain.destroy_all

Mountain.create :name => 'Blue Mountains', :age => "50 million", :mountain_type => "Fold", :location => "NSW", :elevation => 1189, :activities => "Bushwalking Trails, Underwater Rivers, Waterfalls "

Mountain.create :name => 'Snowy Mountains', :age => "20,000", :mountain_type => "Block", :location => "NSW", :elevation => 2228, :activities => "Snowboarding Kayaking, Hiking, Mountain Biking "

Mountain.create :name => 'Green Mountains', :age => "23 million", :mountain_type => "Mountain Range", :location => "QLD", :elevation => 2280, :activities => "Stroll, Hikes through rainforests, waterfalls and creeks"

puts "#{Mountain.count} mountains created"
