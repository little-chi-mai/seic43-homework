Rails.application.routes.draw do
  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new', :as => :new_ocean
  post '/oceans' => 'oceans#create'
  get '/oceans/:id' => 'oceans#show', :as => :ocean
  get '/oceans/:id/edit' => 'oceans#edit', :as => :edit_ocean
  post '/oceans/:id' => 'oceans#update'
  delete '/oceans/:id' => 'oceans#destroy'
end
