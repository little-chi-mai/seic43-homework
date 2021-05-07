class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :height => params[:height], :country => params[:country], :first_climber => params[:first_climber], :first_ascent => params[:first_ascent], :image => params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.country = params[:country]
    mountain.first_climber = params[:first_climber]
    mountain.first_ascent = params[:first_ascent]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to root_path
  end

end
