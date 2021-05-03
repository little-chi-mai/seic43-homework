require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

PRAGMA foreign_keys = ON;

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Brand < ActiveRecord::Base
end

class Trainer < ActiveRecord::Base
end

get '/' do
  erb :home;
end

get '/brands' do
  @brands = Brands.all
  erb :brands_index
end
