require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"

get '/' do
  erb :home
end

get "/result" do
  title = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
  @info = HTTParty.get url
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description = @info["items"][0]["volumeInfo"]["description"]
  #binding.pry
  erb :result
end
