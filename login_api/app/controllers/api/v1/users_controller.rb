class Api::V1::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {data: "success"}
    else
      render json: {error: @user.errors.full_messages }
    end
  end

  private

  def user_params
     params.permit(:first_name, :last_name, :email, :password)
   end
end
