Rails.application.routes.draw do
  root :to => 'games#home'
  get '/magic_ball' => 'magicball#start_game'
  get '/magicball_result' => 'magicball#result'

  get '/secret_number' => 'secret_number#start_game'
  get '/secret_number_result' => 'secret_number#secret_number_result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#start_game'
  get '/rps_result' => 'rock_paper_scissors#rps_result'
end
