require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/hello' do
  @name = params["name"]
  "hello "+ @name
end

get '/search' do
#   #get book title
@title = params["booktitle"]
#   #fetch book info
url ="https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
@info = HTTParty.get url
@author =@info["items"][0]["volumeInfo"]["authors"]
@cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :book
end
