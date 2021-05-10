# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Director.destroy_all
Director.create(:name => 'Quentin Tarantino', :nationality => "American", :genre => "Crime, Drama, Action, Surreal, Black Comedy", :dob => "1963-03-27", :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/672px-Quentin_Tarantino_by_Gage_Skidmore.jpg')

Director.create(:name => 'Martin Scorsese', :nationality => "American & Italian", :genre => "Crime, Thrillers", :dob => "1942-11-17", :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SBIFF_2012_SBclick_Scorsese_%286794397207%29_%28cropped%29.jpg/330px-SBIFF_2012_SBclick_Scorsese_%286794397207%29_%28cropped%29.jpg')

puts "#{ Director.count } directors created."

Movie.destroy_all
Movie.create(:title => 'Pulp Fiction', :released => "1994", :genre => 'Dark Comedy, Crime, Drama', :cast => "John Travolta, Samuel L. Jackson", :image => "https://enterprise.press/wp-content/uploads/2020/01/pulp-fiction-1600px.jpg")

Movie.create(:title => 'Good Fellas', :released => "1990", :genre => 'Crime', :cast => "Robert De Niro, Lorraine Bracco, Joe Pesci, Ray Liotta", :image => "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg")


puts "#{ Movie.count } movies created."

#Associations

quentin = Director.first
pulp = Movie.first
quentin.movies << pulp

martin = Director.last
goodfellas = Movie.last
martin.movies << goodfellas
