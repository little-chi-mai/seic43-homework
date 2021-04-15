require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/cover' do
  title = params[:book].split(' ').map { |v| v.capitalize }.join('+')
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
  @info = HTTParty.get url
  @cover_src = @info['items'][0]['volumeInfo']['imageLinks']['thumbnail']
  @title = @info['items'][0]['volumeInfo']['title']
  @author = @info['items'][0]['volumeInfo']['authors'][0]
  @year = @info['items'][0]['volumeInfo']['publishedDate']
  #   binding.pry
  erb :cover
end
