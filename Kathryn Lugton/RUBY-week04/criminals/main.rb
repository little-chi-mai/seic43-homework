require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#INDEX
get '/criminals' do
  @criminals = query_db 'SELECT * FROM criminals'
  erb :criminals_index
end

#NEW
get '/criminals/new' do
  erb :criminals_new
end

#CREATE
post '/criminals' do
sql = "INSERT INTO criminals (name, crime, image) VALUES ( '#{ params[:name] }', '#{ params[:crime] }', '#{ params[:image] }' )"
query_db sql
redirect to ('/criminals')
end

#SHOW
get '/criminals/:id' do
  criminal = query_db "SELECT * FROM criminals WHERE id=#{ params[:id] }"
  @criminals = criminal[0]
  erb :criminals_show
end

#EDIT
get '/criminals/:id/edit' do
  criminal = query_db "SELECT * FROM criminals WHERE id=#{ params[:id] }"
  @criminals = criminal[0]
  erb :criminals_edit
end

#UPDATE
post '/criminals/:id' do
  sql = "UPDATE criminals SET name='#{ params[:name] }', crime=' #{params[:crime] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db sql
  redirect to("/criminals/#{ params[:id] }")
end

#DESTROY
get '/criminals/:id/delete' do
  query_db "DELETE FROM criminals WHERE id=#{ params[:id] }"
  redirect to ("/criminals")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
