# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
OceanPool.destroy_all

OceanPool.create :name => 'Figure Eight Pools', :state => 'New South Wales', :depth => 3
OceanPool.create :name => 'Injidup Natural Spa', :state => 'Western Australia', :depth => 5
OceanPool.create :name => 'Killarney Glen', :state => 'Queensland', :depth => 10


puts "#{OceanPool.count} pools created"
