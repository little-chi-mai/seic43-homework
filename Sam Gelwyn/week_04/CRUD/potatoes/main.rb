require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/potatoes' do
  @potatoes = query_db 'SELECT * FROM potatoes' 
  erb :potatoes_index
end

# NEW
get '/potatoes/new' do
  erb :potatoes_new
end

# CREATE
post '/potatoes' do
  # create a nightmare string of sql
  sql = "INSERT INTO potatoes (name, family, image) VALUES ('#{params["name"]}', '#{params["family"]}', '#{"image"}')"
  # query_db that string
  query_db sql
  # ??? show something / send somewhere
  redirect to('/potatoes')
end

# SHOW
get '/potatoes/:id' do
  potatoes = query_db "SELECT * FROM potatoes WHERE id=#{ params[:id] }"
  @potato = potatoes[0]
   erb :potatoes_show
end

# EDIT
get '/potatoes/:id/edit' do
  potatoes = query_db "SELECT * FROM potatoes WHERE id=#{ params[:id] }"
  @potato = potatoes[0]
   erb :potatoes_edit
end

#UPDATE
post '/potatoes/:id' do
  sql = "UPDATE potatoes SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db sql
  redirect to("/potatoes/#{params[:id]}")
end

# DESTROY
get '/potatoes/:id/delete' do
  query_db "DELETE FROM potatoes WHERE id=#{params[:id]}"
  redirect to('/potatoes')
end


def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end


