require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

class Cuisine < ActiveRecord::Base
  has_many :restaurants
end

class Restaurant < ActiveRecord::Base
  belongs_to :cuisine
end

ActiveRecord::Base.logger = Logger.new(STDERR)

get '/' do
  erb :home
end


# CUISINE crud #############################################################

# INDEX
get '/cuisines' do
  @cuisines = Cuisine.all
  erb :cuisine_index
end

# CREATE
get '/cuisines/new' do
  erb :cuisines_new
end

post '/cuisines' do
  cuisine = Cuisine.new
  cuisine.name = params[:name]
  cuisine.description = params[:description]
  cuisine.famous_dishes = params[:famous_dishes]
  cuisine.image = params[:image]
  cuisine.save

  redirect to("/cuisines/#{ cuisine.id }")
end

# SHOW
get '/cuisines/:id' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_show
end

# DELETE
get '/cuisines/:id/delete' do
  cuisine = Cuisine.find params[:id]
  cuisine.destroy
  redirect to('/cuisines')
end

#UPDATE
get '/cuisines/:id/edit' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_edit
end

post '/cuisines/:id' do
  cuisine = Cuisine.find params[:id]
  cuisine.name = params[:name]
  cuisine.famous_dishes = params[:famous_dishes]
  cuisine.description = params[:description]
  cuisine.image = params[:image]
  cuisine.save
  redirect to("/cuisines/#{ params[:id] }")
end

# CUISINE crud #############################################################


# Restaurants crud #############################################################

# INDEX
get '/restaurants' do
  @restaurants = Restaurant.all
  erb :restaurants_index
end

# NEW
get '/restaurants/new' do
  erb :restaurants_new
end

# SHOW
get '/restaurants/:id' do
  @restaurant = Restaurant.find params[:id]
  erb :restaurants_show
end

# CREATE
post '/restaurants' do
  restaurant = Restaurant.new
  restaurant.name = params[:name]
  restaurant.address = params[:address]
  restaurant.hours = params[:hours]
  restaurant.cost = params[:cost]
  restaurant.popular_dishes = params[:popular_dishes]
  restaurant.known_for = params[:known_for]
  restaurant.menu = params[:menu]
  restaurant.cuisine_id = params[:cuisine_id]
  restaurant.save
  redirect to("/restaurants/#{ restaurant.id }")
end

# UPDATE
get '/restaurants/:id/edit' do
  @restaurant = Restaurant.find params[:id]
  erb :restaurants_edit
end

post '/restaurants/:id' do
  restaurant = Restaurant.find params[:id]
  restaurant.name = params[:name]
  restaurant.address = params[:address]
  restaurant.hours = params[:hours]
  restaurant.cost = params[:cost]
  restaurant.popular_dishes = params[:popular_dishes]
  restaurant.known_for = params[:known_for]
  restaurant.menu = params[:menu]
  restaurant.cuisine_id = params[:cuisine_id]
  restaurant.save
  redirect to("/restaurants/#{ restaurant.id }")
end

# DESTROY
get '/restaurants/:id/delete' do
  restaurant = Restaurant.find params[:id]
  restaurant.destroy
  redirect to('/restaurants')
end


#####################################################################
get '/pry' do
  binding.pry
  "Thank you for using pry -- please don't tell anyone about this URL"
end
