require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
    erb :form
end

get '/books' do
    book = params[:bookname]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:`#{book}`"
    info =HTTParty.get url
    @title = info["items"].first["volumeInfo"]["title"].upcase
    @cover_image = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :books
end


