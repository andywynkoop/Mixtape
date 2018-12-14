class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      @errors = @user.errors.messages
      render "/api/users/error", status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end