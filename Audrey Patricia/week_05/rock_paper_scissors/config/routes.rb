Rails.application.routes.draw do
  root :to => 'game#hello'

  get '/game' => 'game#start'
  get '/game/check' => 'game#check'

end
