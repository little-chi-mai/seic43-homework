require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

#index
get '/dogs' do
    @dogs = query_db 'SELECT * FROM dogs'
    erb :dogs_index
end

#new
get '/dogs/new' do
    erb :dogs_new
end


#create
post '/dogs' do
    sql = "INSERT INTO dogs (name, breed, image) VALUES ('#{params[:name]}','#{params[:breed]}','#{params[:image]}')"
    query_db sql
    redirect to('/dogs')
end

#show
get '/dogs/:id' do
    dogs = query_db "SELECT * FROM dogs WHERE id = #{ params[:id] }"
    @dog = dogs[0]
    erb :dogs_show
end


#edit
get 'dogs/:id/edit' do
    dogs = query_db "SELECT * FROM dogs WHERE id=#{ params[:id] }"
    @dog = dogs[0]
    erb :dogs_edit
end



#update
post '/dogs/:id' do
    query_db "UPDATE dogs SET name='#{ params["name"] }', breed='#{ params["breed"] }', image='#{ params["image"]}' WHERE id=#{ params["id"]}"
    redirect to("/dogs/#{params[:id]}")
end

#destroy
get '/dogs/:id/delete' do
    query_db "DELETE FROM dogs WHERE id=#{ params[:id]}"
    redirect to('/dogs')
end


def query_db(sql_statement)
    puts sql_statement #debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results


end

