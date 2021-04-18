require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


# title = 'Moby Dick' #get user to input title

# url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title} #use this url and interpolate the title
# GET https://www.googleapis.com/books/v1/volumes?q={search terms}

# @info = HTTParty.get url;  #get the info from the URL link (from Google book API)

# @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]  #use this to get the image of the book




get '/' do
  erb :home
end





get '/result' do
  title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
  @info = HTTParty.get url;
  @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @result = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @authors = @info["items"][0]["volumeInfo"]["authors"].flatten.join(', ')
  @description = @info["items"][0]["volumeInfo"]["description"]
  erb :result
end
