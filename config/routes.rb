Rails.application.routes.draw do

  root 'application#index'
  namespace :api, defaults:{format: :json} do
      namespace :v1 do
        resources :goals
      end
    end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
