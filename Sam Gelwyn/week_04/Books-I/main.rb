require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

# smoke test
get '/' do
  erb :home
end 

get '/result' do
  # get the input
  @title = params[:title]
  # look up title
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get url;
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @Author = @info["items"][0]["volumeInfo"]["authors"]
  @Title = @info["items"][0]["volumeInfo"]["title"]
  @Rating = @info["items"][0]["volumeInfo"]["averageRating"]
  # display the result
erb :result  
end 





