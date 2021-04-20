require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

get '/books' do
    @books = query_db 'SELECT * FROM books'
    erb :books_index
  end
  
  # New
  get '/books/new' do
    erb :books_new # error driven development
  end
  
  # Create
  post '/books' do
    # create SQL sring
    sql =
      "INSERT INTO books (title, author, publish_year, cover) VALUES ('#{params[:title]}','#{params[:author]}','#{params[:publish_year]}', '#{params[:cover]}')"
    query_db sql
    redirect to ('/books') # Get
  end
  
  # Show
  get '/books/:id' do
    books = query_db "SELECT * FROM books WHERE id =#{params[:id]}"
    @book = books.first # Extract the book from the array
    erb :books_show
  end
  
  #Edit
  get '/books/:id/edit' do
    books = query_db "SELECT * FROM books WHERE id =#{params[:id]}"
    @book = books.first # Extract the book from the array
    erb :books_edit
  end
  
  # update
  post '/books/:id' do
    # only happen when update/post new thing to book
    sql =
      "UPDATE books SET title='#{params[:title]}', author='#{params[:author]}', publish_year='#{params[:publish_year]}'cover='#{params[:cover]}' WHERE id='#{params[:id]}'"
    query_db sql
    redirect to("/books/#{params[:id]}") # Get
  end
  
  # Delete
  get '/books/:id/delete' do
    query_db "DELETE FROM books WHERE id=#{params[:id]}"
    redirect to('/books')
  end

def query_db(query)
  puts query # optional but nice for debugging, would show in server log not on page
  db = SQLite3::Database.new 'book_db.sqlite3'
  db.results_as_hash = true
  results = db.execute query
  db.close
  results # implicitly returned
end
