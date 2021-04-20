Rails.application.routes.draw do
    root :to => 'pages#home' # get '/' => 'pages#home'

    get '/magic8/:input' => 'magic8#magic8'
    get '/rps' => 'rps#throw'
    get '/secret' => 'secret#secretnumber'
    get '/secretnumberanswer' => 'secret#secretnumberanswer'


end
