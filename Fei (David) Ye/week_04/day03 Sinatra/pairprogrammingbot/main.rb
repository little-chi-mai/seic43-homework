require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
    erb :home
end

get '/write_code' do
    erb :write_code
end

get '/refactor' do
    erb :refactor
end

get '/new_feature' do
    erb :new_feature
end

get '/do_refactor' do
    erb :do_refactor
end