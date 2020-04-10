Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  resources :cohorts
  resources :students
  # automatically created by the generate command
  devise_for :users
  # checking for matchers coming from http or json
  # rooting the react component to the index.html.erb
  root to: 'home#index'
end
