Rails.application.routes.draw do
  root :to => 'cities#home'
  resources :cities
  resources :locations
end
