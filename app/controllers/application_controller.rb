class ApplicationController < ActionController::Base
  helper_method :current_user
  
  def login(user)
    session[:token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by(session_token: session[:token]);
  end

  def logout
    current_user.reset_session_token! if current_user
    session[:token] = nil
  end
end
