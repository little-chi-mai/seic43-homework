Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/zodiacs/' => 'zodiacs#index'
  get '/zodiacs/new' => 'zodiacs#new', :as => :new_zodiac
  post '/zodiacs/' => 'zodiacs#create'
  get '/zodiacs/:id' => 'zodiacs#show', :as => :zodiac
  get '/zodiacs/:id/edit' => 'zodiacs#edit', :as => :edit_zodiac
  post '/zodiacs/:id' => 'zodiacs#update'
  delete '/zodiacs/:id' => 'zodiacs#destroy'
end
