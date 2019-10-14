Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signup', to: 'users#create', as: 'signup'
      post 'login', to: 'sessions#create', as: 'login'
      get 'logged_in', to: 'sessions#logged_in', as: 'logged_in'
      delete :logout, to: "sessions#logout", as: 'logout'
    end
  end
end
