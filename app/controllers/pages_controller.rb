class PagesController < ApplicationController
  def show
    @room_id = params[:id]
  end
end
