# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Mountain.destory_all

Mountain.create :name => 'Everest', :height => 29029, :country => "Nepal", :first_climber => "Sir Edmund Hillary", :first_ascent => "1953", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Everest_kalapatthar_crop.jpg/735px-Everest_kalapatthar_crop.jpg"

Mountain.create :name => 'Kosciuszko', :height => 7310, :country => "Australia", :first_climber => "Paweł Strzelecki", :first_ascent => "1840", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mount_Kosciuszko_Summit_walk%2C_Kosciuszko_National_Park_02.jpg/1280px-Mount_Kosciuszko_Summit_walk%2C_Kosciuszko_National_Park_02.jpg"

puts "#{Mountain.count} mountains created."
