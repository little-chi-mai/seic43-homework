Rails.application.routes.draw do
  root :to => 'mountains#hello'
  get '/mountains' => 'mountains#index' #mountains_path
  get '/mountains/new' => 'mountains#new', :as => :new_mountain
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => :mountain
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'
end
