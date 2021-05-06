Rails.application.routes.draw do

  root :to => 'rivers#index'

  get '/rivers' => 'rivers#index'

  get '/rivers/new' => 'rivers#new', :as => :new_river
  post '/rivers' => 'rivers#create'

  get '/rivers/:id' => 'rivers#show', :as => :river

  get '/rivers/:id/edit' => 'rivers#edit', :as => :edit_river
  post '/rivers/:id' => 'rivers#update'

  delete '/rivers/:id' => 'rivers#destroy'

end
