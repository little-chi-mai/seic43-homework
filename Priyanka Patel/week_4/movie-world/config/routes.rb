Rails.application.routes.draw do
  root :to =>'movies#home'
  get '/movies' => 'movies#index'
  get '/movies/new' => 'movies#new', :as => :new_movie
  post '/movies' => 'movies#create'
  get '/movies/:id' => 'movies#show', :as => :movie
  get '/movies/:id/edit' => 'movies#edit', :as => :edit_movie
  post '/movies/:id' => 'movies#update'
  delete '/movies/:id' => 'movies#destroy'
end
