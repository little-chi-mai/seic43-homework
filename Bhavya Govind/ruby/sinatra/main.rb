# Books I

## Specification

# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.

## Sample URL

#https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

### Additional Resources

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
get '/' do 
    erb :home
end
get '/book_cover' do
    #get inputs
    @book = params[:book_title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"
    info = HTTParty.get url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    #display the result
    erb :book_cover
end