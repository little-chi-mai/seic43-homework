Rails.application.routes.draw do
root :to => 'pages#home'
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/guess_number' => 'guess_number#form'
get '/guess_number/result' => 'guess_number#result'
get '/magic_ball' => 'magic_ball#form'
get '/magic_ball/result' => 'magic_ball#result'
end
