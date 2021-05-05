require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
);

#Model
class City < ActiveRecord::Base
  has_many :locations
end
#Model
class Location < ActiveRecord::Base
  belongs_to :city, :optional => true
end


get '/' do
  erb :home
end
# Idex
get '/cities' do
  @cities = City.all
  erb :cities_index
end

#New
get '/cities/new' do
  erb :cities_new
end

#Create
post '/cities' do
  city = City.new
  city.name = params[:name]
  city.country = params[:country]
  city.map = params[:map]
  city.information = params[:information]
  city.save
  redirect to("/cities/#{city.id}")
end

#SHOW

get '/cities/:id' do
  @city = City.find params[:id]

  erb :cities_show
end

#edit

get '/cities/:id/edit' do
  @city = City.find params[:id]
  erb :cities_edit
end

#Update

post '/cities/:id' do
  city = City.find params[:id]
  city.name = params[:name]
  city.country = params[:country]
  city.map = params[:map]
  city.information = params[:information]
  city.save
  redirect to('/cities')
end

#Delete
get '/cities/:id/delete' do
  city = City.find params[:id]
  city.destroy
  redirect to('/cities')
end

###### Locations CRUD ########

#locations_index

get '/locations' do
  @locations = Location.all
  erb :locations_index
end
#new
get '/location/new' do
  erb :location_new
end

#Create
post '/locations' do
  location = Location.new
  location.location_name = params[:name]
  location.map = params[:map]
  location.image = params[:information]
  location.city_id = params[:vacation_id]
  location.save
  redirect to("/locations/#{location.id}")
end

#SHOW
get '/locations/:id' do
  @location = Location.find params[:id]
  erb :location_show
end
#Edit
get '/locations/:id/edit' do
  @location = Location.find params[:id]
  erb :locations_edit
end

#Update
post '/locations/:id' do
  location = Location.find params[:id]
  location.location_name = params[:name]
  location.map = params[:map]
  location.image = params[:image]
  location.information = params[:information]
  location.city_id = params[:vacation_id]
  location.save
  redirect to("locations/#{location.id}")

end

#Delete
get '/locations/:id/delete' do
  location = Location.find params[:id]
  location.destroy
  redirect to("/locations")
end
