Rails.application.routes.draw do

  devise_for :users
  devise_scope :user do
   get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root 'application#index'
  namespace :api, defaults:{format: :json} do
      namespace :v1 do
        resources :goals
        resources :users
        resources :posts
      end
    end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
