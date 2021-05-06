require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get "/" do
  erb :home
end

get "/result" do
# binding.pry
  #get user input
  title = params[:input]
  #do something
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
  #return result
  info = HTTParty.get url;
  @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result
end
