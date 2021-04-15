require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/search' do
  @title = params["title"]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get url
  @ret_title = @info["items"][0]["volumeInfo"]["title"]
  @img_src = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @subtitle = @info["items"][0]["volumeInfo"]["subtitle"]
  @authors = @info["items"][0]["volumeInfo"]["authors"].flatten.join(", ")
  @publisher = @info["items"][0]["volumeInfo"]["publisher"]
  @published_date = @info["items"][0]["volumeInfo"]["publishedDate"]
  @categories = @info["items"][0]["volumeInfo"]["categories"].flatten.join(", ")
  @page_count = @info["items"][0]["volumeInfo"]["pageCount"]
  @description = @info["items"][0]["volumeInfo"]["description"]
  # @retail_price = @info["items"][0]["saleInfo"]["retailPrice"]["amount"]
  @average_rating = @info["items"][0]["volumeInfo"]["averageRating"]
  @buy_link = @info["items"][0]["saleInfo"]["buyLink"]
  @preview_link = @info["items"][0]["volumeInfo"]["previewLink"]
  # binding.pry
  erb :search
end

get '/categories' do
  url = 'https://www.googleapis.com/books/v1/volumes?q=["items"][0]["volumeInfo"]["categories"]="Education"'
  @info = HTTParty.get url

  books_array = @info["items"]
  @image_array = []
  books_array.each do |item|
    @image_array << item["volumeInfo"]["imageLinks"]["thumbnail"]
  end
  @image1 = @image_array[0]
  @image2 = @image_array[1]
  @image3 = @image_array[2]
  @image4 = @image_array[3]
  @image5 = @image_array[4]
  @image6 = @image_array[5]
  @image7 = @image_array[6]
  @image8 = @image_array[7]
  @image9 = @image_array[8]
  @image10 = @image_array[9]

  erb :categories
end
