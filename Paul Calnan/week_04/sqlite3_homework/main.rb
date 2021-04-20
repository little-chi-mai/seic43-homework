require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#INDEX show an index of posts @ mugshots_index.erb
get '/mugshots' do
  @mugshots = query_db 'SELECT * FROM mugshots'
  erb :mugshots_index
end


#GET NEW / VIA FORM
get '/mugshots/new' do

  erb :mugshots_new
end

#CREATE POST
post '/mugshots/' do #must have a form that says method="post"
  sql = "INSERT INTO mugshots (name, crime, image) VALUES ('#{params[:name]}', '#{params[:crime]}', '#{params[:image]}')"
  query_db sql#query db that string above
  redirect to('/mugshots')# get request
end

#SHOW / BY # ID
get '/mugshots/:id' do
  mugshots = query_db "SELECT * FROM mugshots WHERE id=#{ params[:id] }"
  @mugshot = mugshots[0]
  erb :mugshots_show
end

#EDIT
get '/mugshots/:id/edit' do
  mugshots = query_db "SELECT * FROM mugshots WHERE id=#{ params[:id] }"
  @mugshot = mugshots[0]
  erb :mugshots_edit
end


#UPDATE
post '/mugshots/:id' do
  sql = "UPDATE mugshots SET
  name='#{params[:name]}',
  crime='#{params[:crime]}',
  image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db sql
  redirect to("/mugshots/#{params[:id]}")
end

#DESTROY
get '/mugshots/:id/delete' do
  #delete mugshot
  query_db "DELETE FROM mugshots WHERE id=#{ params[:id] }"
  #redirect
  redirect to('/mugshots')#GET
end

def query_db(query)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute query #put into results variable
  db.close #close the database
  results #return the results from the variable
end
