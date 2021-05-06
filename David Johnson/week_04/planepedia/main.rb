require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get "/" do
  erb :home
end

#INDEX
get "/aircraft" do
  @aircraft = query_db 'SELECT * FROM planes'
  erb :planes_index
end

#ADD
get "/aircraft/add" do
  erb :planes_add
end

#ADD
post "/aircraft" do
  sql = "INSERT INTO planes (manufacturer, model, description, image) VALUES ('#{params[:manufacturer]}', '#{params[:model]}', '#{params[:description]}', '#{params[:image]}')"
  query_db sql
  redirect to("/aircraft")
end

#SHOW
get "/aircraft/:id" do
  aircraft = query_db "SELECT * FROM planes WHERE id=#{params[:id]}"
  @specific_aircraft = aircraft[0]
  erb :planes_detail
end

#EDIT
get "/aircraft/:id/edit" do
  aircraft = query_db "SELECT * FROM planes WHERE id=#{params[:id]}"
  @specific_aircraft = aircraft[0]
  erb :planes_edit
end

#UPDATE
post "/aircraft/:id" do
  sql = "UPDATE planes SET manufacturer='#{params[:manufacturer]}', model='#{params[:model]}', description='#{params[:description]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  binding.pry
  query_db sql
  redirect to("/aircraft/#{params[:id]}") #GET
end

def query_db(sql_statement)
  puts sql_statement #optional but nice for debugging
  db = SQLite3::Database.new "database.sqlite3"
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
