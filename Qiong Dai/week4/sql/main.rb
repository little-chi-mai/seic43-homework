require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get "/" do
    erb :home
end

#INDEX
get "/chips" do
    @chips = query_db "SELECT * FROM chips"
    erb :chips_index
end

#NEW
get "/chips/new" do
    erb :chips_new
end


#EDIT
get "/chips/:id/edit" do
    chips = query_db "SELECT * FROM chips WHERE id=#{ params[:id] }"
    @chip = chips[0]
    erb :chips_show
end


#UPDATE
post "/chips/:id/" do
    query_db "UPDATE chips SET flavour ="
end






#SHOW
get "/chips/:id" do
    chips = query_db "SELECT * FROM chips WHERE id=#{ params[:id] }"
    @chip = chips[0]
    erb :chips_show
end





def query_db (query)
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    results = db.execute query
    db.close
    results
end