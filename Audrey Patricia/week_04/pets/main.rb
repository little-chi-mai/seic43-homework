require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# INDEX
get '/pets' do
  @pets= query_db 'SELECT * FROM pets'
  erb :pets_index
end

# NEW
get '/pets/new' do
  erb :pets_new
end

# # FILTER
# get '/pets/filter' do
#   erb :pets_filter
# end
#
# post '/pets/filter' do
#
#   @pets = query_db "SELECT * FROM pets WHERE type='#{ params[:type]}'"
#
#   redirect to('/pets/filtered')
# end

# SHOW
get '/pets/:id' do
  pets = query_db "SELECT * FROM pets WHERE id= #{ params[:id] }"
  @pet = pets[0]

  @pets= query_db 'SELECT * FROM pets'

  erb :pets_show
end

# CREATE
post '/pets' do
  # create a nightmare string of horrible SQLite3
  sql = "INSERT INTO pets (name, gender, age, breed, type, image) VALUES ('#{params[:name]}','#{params[:gender]}','#{params[:age]}','#{params[:breed]}','#{params[:type]}', '#{params[:image]}')"
  # query_db that string
  query_db sql
  # show the user something? send the user somewhere
  redirect to('/pets') #this is the get request, not the post
end

# EDIT
get '/pets/:id/edit' do
  pets = query_db "SELECT * FROM pets WHERE id=#{ params[:id] }"
  @pet = pets[0]

  # binding.pry
  erb :pets_edit
end

# UPDATE
post '/pets/:id' do
  sql = "UPDATE pets SET name='#{params[:name]}', gender='#{params[:gender]}', age='#{params[:age]}', breed='#{params[:breed]}', type='#{params[:type]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db sql
  redirect to("/pets/#{params["id"]}")
end

# DELETE
get '/pets/:id/delete' do
  query_db "DELETE FROM pets WHERE id=#{params[:id]}"
  redirect to('/pets')
end


def query_db (sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
