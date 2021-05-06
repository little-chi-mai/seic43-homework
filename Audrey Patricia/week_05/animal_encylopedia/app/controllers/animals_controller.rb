class AnimalsController < ApplicationController

  def index
    @animals = Animal.all
  end

  def show
    @animal = Animal.find params[:id]
  end

  def new
    @animal = Animal.new
    @habitats = Habitat.all

  end

  def create
    animal = Animal.create animal_params
    redirect_to animal
  end

  def edit
    @animal = Animal.find params[:id]
  end

  def update
    animal = Animal.find params[:id]
    animal.update animal_params
    redirect_to animal
  end

  def destroy
    animal = Animal.find params[:id]
    animal.destroy
    redirect_to animals_path
  end

  private
  def animal_params
    params.require(:animal).permit(:name, :scientific_name, :weight, :diet, :funfact, :image, :habitat_id)
  end
end
