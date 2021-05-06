Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'ocean_pools#index'

  get '/ocean_pools' => 'ocean_pools#index'

  get '/ocean_pools/new' => 'ocean_pools#new', :as => :new_ocean_pool
  post '/ocean_pools' => 'ocean_pools#create'

  get '/ocean_pools/:id' => 'ocean_pools#show', :as => :ocean_pool

  get '/ocean_pools/:id/edit' => 'ocean_pools#edit', :as => :edit_ocean_pool
  post '/ocean_pools/:id' => 'ocean_pools#update'

  delete '/ocean_pools/:id' => 'ocean_pools#destroy'

end
