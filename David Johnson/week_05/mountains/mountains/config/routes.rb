Rails.application.routes.draw do

  root :to => 'mountains#index'
  get '/mountains/new' => 'mountains#new', :as => :new_mountain
  get '/mountains/:id' => 'mountains#show', :as => :mountain
  post '/mountains' => 'mountains#create'
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain
  post '/mountains/:id' => 'mountains#update', :as => :update
  delete '/mountains/:id' => 'mountains#destroy', :as => :destroy
end
