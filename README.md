# Group Maker

Stories

- As a user, I can see a landing page
  - Landing page has a header, header shows on all pages
  - Landing page has a nav bar
  - Landing page has a sign in form
- As a user, I can navigate to the sign up page
  - Unprotected pages are only sign in and sign up
- As a user, I can log in to the application
- As a user, when I log in I can see a list of cohorts
- As a user, I can click on a cohort and see a list of all the students
- As a user, I can click a button and create random pairings
- As a user, I can log out

Stretch
- As a user, I can remove students from the list who are absent
- As a user, I can choose the size of the group I want to make



## Process

$ rails new groups -d postgresql -T
$ bundle add react-rails
$ bundle install
$ rails webpacker:install  
$ rails webpacker:install:react
$ rails generate react:install  
$ yarn install
$ rails g react:component App    
$ rails g controller Home   
$ rm app/helpers/home_helper.rb   
$ rm app/assets/stylesheets/home.scss
$ cd app/views/home
$ touch index.html.erb    
$ bundle add bootstrap   
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
$ yarn add react-router-dom
$ bundle add devise   
$ rails g devise:install     
$ rails g devise User
$ rails db:create   
$ rails db:migrate    

add content to config/routes.rb
```
devise_for :users
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root to: 'home#index'
```
add content to app/views/index.html.erb
```
<%= react_component("App", {
    logged_in: user_signed_in?,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
}) %>
```
add @import 'bootstrap' to app/assets/stylesheets/application.scss

modify config/initializers/devise.rb change config.sign_out_via = :delete to config.sign_out_via = :get
