Rails.application.routes.draw do
  get 'sessions/new'

  namespace :api do
    namespace :v1 do
      resources :sessions
      resources :users
    end
  end
end
