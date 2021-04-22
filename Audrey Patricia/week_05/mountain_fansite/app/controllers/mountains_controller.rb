class MountainsController < ApplicationController

  def hello
  end

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :age => params[:age], :mountain_type => params[:mountain_type], :location => params[:location], :elevation => params[:elevation], :activities => params[:activities], :image => params[:image]

    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.age = params[:age]
    mountain.mountain_type = params[:mountain_type]
    mountain.location = params[:location]
    mountain.elevation = params[:elevation]
    mountain.activities = params[:activities]
    mountain.image = params[:image]
    mountain.save

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

end
