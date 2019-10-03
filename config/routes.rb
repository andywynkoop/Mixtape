Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/receive_song_file', to: "songs#receive_song_file"
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :index]
    resources :artists, only: [:create, :index, :show]
    resources :albums, only: [:create, :index, :show]
    resources :playlists, only: [:create, :index, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    get '/search', to: "searches#index"
  end
  root to: "static_pages#app"
end
