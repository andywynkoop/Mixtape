class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      @errors = { general: ["Invalid Credentials"] }
      render "/api/users/error", status: 401
    end
  end

  def destroy
    logout
    render "/api/success"
  end
end