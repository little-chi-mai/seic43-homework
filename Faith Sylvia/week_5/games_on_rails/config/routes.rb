Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/eight_ball' => 'eight_ball#input'
  get '/eight_ball/fortune' => 'eight_ball#fortune'

  get '/secret_number' => 'secret_number#input'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#input'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'

end
