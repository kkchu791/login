class Api::V1::UsersController < ApplicationController
  def create
    byebug
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      #redirect_to root_url, notice: "Thank you for signing up!"
    else
      #render "new"
    end
  end

  private

  def user_params
     params.require(:requestOptions).require(:body).permit(:first_name, :last_name, :email, :password)
   end
end
