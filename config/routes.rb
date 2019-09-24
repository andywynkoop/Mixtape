Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/receive_song_file', to: "songs#receive_song_file"
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :index]
    resources :artists, only: [:create]
    resources :albums, only: [:create, :index, :show]
  end
  root to: "static_pages#app"
end
