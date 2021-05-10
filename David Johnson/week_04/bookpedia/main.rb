require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

class Author < ActiveRecord::Base
  has_many :books, dependent: :destroy
end

class Book < ActiveRecord::Base
  belongs_to :author, :optional => true
end

#HOME
get "/" do
  erb :home
end

#INDEX
get "/authors" do
  @authors = Author.all
  erb :authors_index
end

#NEW
get "/authors/new" do
  erb :authors_new
end

#CREATE
post "/authors" do
  author = Author.new
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.prize_1 = params[:award]
  author.image = params[:image]
  author.save
  redirect to("/authors")
end

#SHOW
get "/authors/:id" do
  @author = Author.find params[:id]
  @books = Book.where(author_id: @author.id)
  erb :authors_show
end

#EDIT

get "/authors/:id/edit" do
  @author = Author.find params[:id]
  erb :authors_edit
end

#UPDATE

post "/authors/:id" do
  author = Author.find params[:id]
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.bio = params[:bio]
  author.year_born = params[:year_born]
  author.year_died = params[:year_died]
  author.prize_1 = params[:award_1]
  author.prize_2 = params[:award_2]
  author.prize_3 = params[:award_3]
  author.genre = params[:genre]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{params[:id]}")
  erb :authors_show
end

#DESTORY

get "/authors/:id/delete" do
  author = Author.find params[:id]
  author.destroy
  redirect to("/authors")
end

                    #BOOKS
#INDEX

get "/books" do
  erb :books_index
end

#NEW
get "/authors/:id/new_book" do
  @author = Author.find params[:id]
  erb :books_new
end

#CREATE
post "/authors/:id" do
  @author = Author.find params[:id]
  book = @author.books.create
  book.title = params[:title]
  book.year_published = params[:year_published].to_i
  book.book_prize_1 = params[:book_prize_1]
  book.book_image = params[:book_image]
  book.save
  redirect to("/authors/#{ @author.id }")
end

#SHOW
get "/books/:id" do
  erb :books_show
end
