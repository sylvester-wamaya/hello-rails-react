Rails.application.routes.draw do
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    resources :messages, only: [:index]
  # Defines the root path route ("/")
   root "root#index"
end
