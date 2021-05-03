require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models

class Author < ActiveRecord::Base
  has_many :books
end

class Book < ActiveRecord::Base
  belongs_to :author
end

get '/' do
  erb :home
end

# INDEX
get '/books' do
  @books = Book.all
  erb :books_index
end

#GET NEW / POST VIA FORM
get '/books/new' do
  erb :books_new
end

#CREATE POST
post '/books/' do #must have a form that says method="post"
  book = Book.new
  book.title = params[:title]
  book.author = params[:author]
  book.image = params[:image]
  book.save
  redirect to("/books/#{ book.id }")
end

#SHOW / BY DATABASE ID
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

#EDIT
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

#UPDATE
post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.author = params[:author]
  book.image = params[:image]
  book.save
  redirect to("/books/#{book.id}")
end

#DESTROY
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')#GET
end


#AUTHORS CRUD ################################################################
#INDEX
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

#NEW
get '/authors/new' do
  erb :authors_new
end

#CREATE POST
post '/authors' do #must have a form that says method="post"
  author = Author.new
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.save
  redirect to("/authors/#{author.id}")
end

#SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

#EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

#UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.save
  redirect to("/authors/#{author.id}")
end

#DESTROY
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')#GET
end
