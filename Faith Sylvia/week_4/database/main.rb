require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/ocean_pools' do
  @ocean_pools = query_db 'SELECT * FROM ocean_pools'
  erb :ocean_pools_index
end

get '/ocean_pools/new' do
  erb :ocean_pools_new
end

post '/ocean_pools' do

  sql = "INSERT INTO ocean_pools (name,state,image,description) VALUES ('#{params[:name]}','#{params[:state]}','#{params[:image]}','#{params[:description]}')"

  query_db sql

  redirect to ('/ocean_pools') #allows you to see where you just added the new entry - but could redirect to any page!!

end

get '/ocean_pools/:id' do #here, with :id, we are telling sinatra to accept any string which we are just calling id (it's like a |n| in an each or like i in for loop - placeholder that can then be used belown)

  pool_as_array = query_db "SELECT * FROM ocean_pools WHERE id=#{ params[:id] }"

  @pool = pool_as_array[0]

  erb :ocean_pools_show

end

#when someone clicks on the edit link from the show page(which is set on the show page as an a tag with /ocean_pools/:id/edit) then set the variables to be used on the following page, which will be the actual edit page
get '/ocean_pools/:id/edit' do

  pool_as_array = query_db "SELECT * FROM ocean_pools WHERE id=#{ params[:id] }"

  @pool = pool_as_array[0]

  erb :ocean_pools_edit

end

#when on the edit page, when you click the button to submit the update form, the action = direct to /ocean_pools/:id with the post method which leads to the below ditty. Here we actually use SQL to update the database itself for all filled in fields, and then redirect (really just a prompting a get request) to the show page for that pool so that you can see your changes
post '/ocean_pools/:id' do

  sql = "UPDATE ocean_pools SET name='#{params[:name]}', state = '#{params[:state]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id=#{params[:id]}" #is all of this info pulling from the form just filled out? Is the from linked somehow to this code block?

  query_db sql

  redirect to("/ocean_pools/#{ params[:id] }")

end

get '/ocean_pools/:id/delete' do

  sql = "DELETE FROM ocean_pools WHERE id=#{params[:id]}"

  query_db sql

  redirect to('/ocean_pools')

end


def query_db sql_statement

  #connect to the database
  db = SQLite3::Database.new 'database.sqlite3'

  # puts sql_statement #if debugging

  #turn db from an array of arrays to array of hashes
  db.results_as_hash = true

  results = db.execute sql_statement

  db.close #implicitly returned if last line

  results #Now this gets implicitly returned

end
