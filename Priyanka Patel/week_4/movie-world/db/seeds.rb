Movie.destroy_all

Movie.create :name => 'Avtar', :director => 'James Cameron', :producer => 'James Cameron', :country => 'United States'
Movie.create :name => 'Avengers', :director => 'Joss Whedon', :producer => 'Kevin Feige', :country => 'United States'
Movie.create :name => 'Titanic', :director => 'James Cameron', :producer => 'James Cameron', :country => 'United States'

puts "#{ Movie.count } movies created."
