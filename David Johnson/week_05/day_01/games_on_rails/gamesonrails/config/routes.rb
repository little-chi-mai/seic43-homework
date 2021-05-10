Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get "/magicball" => 'magicball#ask'
  get "/magicball/answer" => 'magicball#answer'

  get "/guesser" => 'guesser#guess'
  get "/guess_again" => 'guesser#guess_again'
end
