Rails.application.routes.draw do
  root :to => 'habitats#hello'
  resources :habitats
  resources :animals
end
