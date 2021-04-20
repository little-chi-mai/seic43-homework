require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#get all countries data
get '/countries' do
 @countries = query_db "SELECT * FROM worldometer"
 erb :countries_index
end

get '/countries/new' do
  erb :countries_new
end

#CREATE
post '/countries' do

  sql = "INSERT INTO worldometer (name, capital_city, population, land_area, world_share, image) VALUES ('#{params[:name]}','#{params[:capital_city]}', #{params[:population]}, #{params[:land_area]}, #{params[:world_share]}, '#{params[:image]}')"
  p sql
  query_db sql
  redirect to('countries')
end
#SHOW
get '/countries/:id' do
  @countries = query_db "SELECT * FROM worldometer WHERE id=#{ params[:id] }"
  @country = @countries[0]# Extract the countries from the array.
  erb :countries_show
end

#EDIT
get '/countries/:id/edit' do
  @countries = query_db "SELECT * FROM worldometer WHERE id=#{ params[:id] }"
  @country = @countries[0]# Extract the country from the array.
  erb :countries_edit
end

#UPDATE
post '/countries/:id' do
sql = "UPDATE worldometer SET name='#{params[:name]}', capital_city='#{params[:capital_city]}', population='#{params[:population]}', land_area='#{params[:land_area]}', world_share='#{params[:world_share]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
query_db sql
redirect to("/countries/#{params[:id]}") # create get request
end

#DELETE
get '/countries/:id/delete' do
  #delete butterfly
  query_db "DELETE FROM worldometer WHERE id=#{params[:id] }"
  redirect to('/countries') #GET reuqest
end

#FUNCTION
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
