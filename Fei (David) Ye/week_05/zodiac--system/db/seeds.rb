# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Zodiac.destroy_all

Zodiac.create :latin_name => 'Aries', :english_name => 'Ram', :ecliptic_longitude => 0
Zodiac.create :latin_name => 'Taurus', :english_name => 'Bull', :ecliptic_longitude => 30
Zodiac.create :latin_name => 'Gemini', :english_name => 'Twins', :ecliptic_longitude => 60
puts "#{ Zodiac.count } planets created."
