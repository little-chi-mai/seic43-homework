require "sinatra"
require "sinatra/reloader"
require 'httparty'

get "/" do
    erb :home
end

get "/result" do
    # inputs
    @bookname = params[:book_name]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@bookname}"
    # result 
    @info = HTTParty.get url;
    @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    # display
    erb :result
end