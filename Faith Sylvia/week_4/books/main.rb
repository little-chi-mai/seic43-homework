require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/book_result' do

chosen_title = params[:book_title]
thumnail_link =  "https://www.googleapis.com/books/v1/volumes?q=title:" + chosen_title
book_info = HTTParty.get thumnail_link;
@cover_image = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
@description =  book_info["items"][0]["volumeInfo"]["description"]

erb :book_result

end
