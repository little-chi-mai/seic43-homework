Rails.application.routes.draw do
  root :to => 'patients#index'
  get '/patients' => 'patients#index'
  get '/patients/new' => 'patients#new', :as => :new_patient
  post '/patients' => 'patients#create'
  get '/patients/:id' => 'patients#show', :as => :patient
  get '/patients/:id/edit' => 'patients#edit', :as => :edit_patient
  post '/patients/:id' => 'patients#update'
  delete '/patients/:id' => 'patients#delete'

end
