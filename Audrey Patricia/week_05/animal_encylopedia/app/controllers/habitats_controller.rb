class HabitatsController < ApplicationController

  def hello
  end

  def index
    @habitats = Habitat.all
  end

  def show
    @habitat = Habitat.find params[:id]
  end

  def new
    @habitat = Habitat.new
  end

  def create
    habitat = Habitat.create habitat_params
    redirect_to habitat
  end

  def edit
    @habitat = Habitat.find params[:id]
  end

  def update
    habitat = Habitat.find params[:id]
    habitat.update habitat_params
    redirect_to habitat
  end

  def destroy
    habitat = Habitat.find params[:id]
    habitat.destroy
    redirect_to habitats_path
  end


  private
  def habitat_params
    params.require(:habitat).permit(:name, :location, :characteristics, :image)
  end

end
