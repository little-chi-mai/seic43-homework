Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/result' => 'pages#result'
end
